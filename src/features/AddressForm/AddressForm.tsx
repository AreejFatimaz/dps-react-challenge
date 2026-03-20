import {
  Box,
  TextField,
  Typography,
  Autocomplete,
  CircularProgress,
  InputAdornment,
} from "@mui/material"

import { ThemeProvider } from "@mui/material/styles"
import LocationCityIcon from "@mui/icons-material/LocationCity"
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

import { theme, sx } from "./styles/AddressForm.styles"
import { globalStyles } from "../../styles/styles"
import { useAddressForm } from "./hooks/useAddressForm"

function GermanFlag() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.15)",
        flexShrink: 0,
      }}
    >
      <Box sx={{ flex: 1, background: "#000000" }} />
      <Box sx={{ flex: 1, background: "#CC0000" }} />
      <Box sx={{ flex: 1, background: "#FFCD00" }} />
    </Box>
  )
}

export default function AddressForm() {
  const {
    locality,
    postalCode,
    postalOptions,
    error,
    loading,
    success,
    handleLocalityChange,
    handlePostalChange,
    handlePostalSelect,
  } = useAddressForm()

  return (
    <ThemeProvider theme={theme}>
      <style>{globalStyles}</style>


      <Box className="address-card" sx={sx.card}>

        <Box
          sx={{
            ...sx.shimmerLine,
            background: "linear-gradient(90deg, #00BCD4, #7C4DFF, #E91E8C)",
            opacity: 1,
            height: "3px",
          }}
        />

        <Box sx={{ mb: 4 }}>
          <Box sx={{ ...sx.badge, display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
            <GermanFlag />
            <Typography sx={sx.badgeText}>Deutschland · PLZ-Suche</Typography>
          </Box>

          <Typography sx={sx.title}>Adressvalidator (Deutschland)</Typography>

          <Typography sx={sx.subtitle}>
            Geben Sie eine Stadt oder Postleitzahl zur Überprüfung ein.
          </Typography>
        </Box>

        <Box sx={{ ...sx.divider, borderColor: "rgba(0, 188, 212, 0.2)" }} />

        <Box className="field-wrapper" sx={{ mb: 2.5 }}>
          <span className="label-tag">Stadt / Gemeinde</span>
          <TextField
            fullWidth
            placeholder="e.g. Frankfurt oder Köln…"
            margin="none"
            value={locality}
            disabled={loading}
            onChange={(e) => handleLocalityChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ pl: 0, ml: 0 }}>
                  <LocationCityIcon sx={{ fontSize: 18, color: "#00BCD4" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className="field-wrapper" sx={{ mb: 2.5 }}>
          <span className="label-tag">Postleitzahl (PLZ)</span>
          <Autocomplete
            freeSolo
            options={postalOptions}
            forcePopupIcon={postalOptions.length > 0}
            inputValue={postalCode}
            loading={loading}
            onInputChange={(_event, newInputValue) => handlePostalChange(newInputValue)}
            onChange={(_event, newValue) => {
              if (typeof newValue === "string") handlePostalSelect(newValue)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={postalOptions.length > 0 ? "Bitte PLZ auswählen..." : "e.g. 66113"}
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ pl: 0, ml: 0.5 }}>
                      <LocalPostOfficeIcon sx={{ fontSize: 18, color: "#7C4DFF" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      {loading && <CircularProgress size={16} sx={{ color: "#E91E8C", mr: 1 }} />}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </Box>

        {(error || success) && (
          <Box sx={error ? sx.statusError : sx.statusSuccess}>
            {success && (
              <CheckCircleOutlineIcon className="success-ping" sx={{ fontSize: 16, color: "#22C55E" }} />
            )}
            <Typography sx={sx.statusText(!!error)}>
              {error || "Adresse erfolgreich validiert ✓"}
            </Typography>
          </Box>
        )}

        <Box sx={{ display: "flex", gap: "6px", mt: 3 }}>
          <Box sx={{ flex: 1, height: "3px", borderRadius: "2px", background: "#00BCD4" }} />
          <Box sx={{ flex: 1, height: "3px", borderRadius: "2px", background: "#7C4DFF" }} />
          <Box sx={{ flex: 1, height: "3px", borderRadius: "2px", background: "#E91E8C" }} />
        </Box>

      </Box>
    </ThemeProvider>
  )
}