import { createTheme } from "@mui/material/styles"
import { SxProps, Theme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", "Helvetica Neue", sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            // ── CHANGE 1: card input background slightly lighter dark ──
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            borderRadius: "14px",
            color: "#f0f0f0",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "transparent",
              borderWidth: "1.5px",
              transition: "all 0.3s ease",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent !important",
            },
            // ── CHANGE 2: hover border now DPS cyan ──
            "&:hover fieldset": {
              borderColor: "rgba(0, 188, 212, 0.4)",
            },
            // ── CHANGE 3: focused glow now DPS cyan ──
            "&.Mui-focused": {
              backgroundColor: "rgba(0, 188, 212, 0.05)",
              boxShadow: "0 0 0 3px rgba(0, 188, 212, 0.12)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00BCD4",
              borderWidth: "1.5px",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.35)",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "14px",
            letterSpacing: "0.03em",
            // ── CHANGE 4: focused label now DPS cyan ──
            "&.Mui-focused": {
              color: "#00BCD4",
            },
          },
          "& .MuiInputBase-input": {
            padding: "17px 6px",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(255,255,255,0.2)",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        // ── CHANGE 5: dropdown background matches new card color ──
        paper: {
          backgroundColor: "#12152e",
          border: "1px solid rgba(0, 188, 212, 0.2)",
          borderRadius: "12px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          marginTop: "6px",
        },
        popupIndicator: {
          color: "rgba(255,255,255,0.2)",
          "&:hover": {
            // ── CHANGE 6: popup arrow hover now DPS cyan ──
            color: "#00BCD4",
            backgroundColor: "transparent",
          },
        },
        option: {
          color: "#d0d0d0",
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "14px",
          padding: "12px 16px",
          "&:hover": {
            // ── CHANGE 7: option hover now DPS cyan ──
            backgroundColor: "rgba(0, 188, 212, 0.1) !important",
            color: "#00BCD4",
          },
          "&[aria-selected='true']": {
            backgroundColor: "rgba(0, 188, 212, 0.15) !important",
          },
        },
        noOptions: {
          color: "rgba(255,255,255,0.3)",
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "13px",
        },
      },
    },
  },
})

export const sx = {
  // ── CHANGE 8: top orb now DPS cyan ──
  orbTop: {
    position: "fixed",
    top: "15%",
    left: "20%",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  } as SxProps<Theme>,

  // ── CHANGE 9: bottom orb now DPS pink ──
  orbBottom: {
    position: "fixed",
    bottom: "15%",
    right: "15%",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(233,30,140,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
  } as SxProps<Theme>,

  // ── CHANGE 10: card background is now deep navy/dark blue ──
  card: {
    width: "100%",
    maxWidth: 440,
    background: "linear-gradient(145deg, rgba(18,21,46,0.95) 0%, rgba(10,12,30,0.98) 100%)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    // ── CHANGE 11: card border now subtle DPS purple ──
    border: "1px solid rgba(124, 77, 255, 0.2)",
    borderRadius: "24px",
    p: "40px 36px 36px",
    // ── CHANGE 12: card shadow now has purple tint ──
    boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(124,77,255,0.15)",
    position: "relative",
    overflow: "hidden",
  } as SxProps<Theme>,

  // ── CHANGE 13: shimmer line now full DPS 3-color gradient ──
  shimmerLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #00BCD4, #7C4DFF, #E91E8C)",
    backgroundSize: "200% auto",
    animation: "shimmer 4s linear infinite",
  } as SxProps<Theme>,

  // ── CHANGE 14: badge background now DPS purple tint ──
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",   // ← centers flag + text
    gap: 1,
    px: 1.5,
    py: 0.6,
    borderRadius: "8px",
    background: "rgba(124, 77, 255, 0.1)",
    border: "1px solid rgba(124, 77, 255, 0.25)",
    mb: 2,
  } as SxProps<Theme>,

  // ── CHANGE 15: badge dot now DPS purple ──
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#7C4DFF",
    boxShadow: "0 0 8px #7C4DFF",
  } as SxProps<Theme>,

  // ── CHANGE 16: badge text now DPS purple ──
  badgeText: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#7C4DFF",
    fontFamily: '"DM Sans", sans-serif',
  } as SxProps<Theme>,

  title: {
    fontFamily: '"DM Sans", sans-serif',
    fontStyle: "italic",
    fontSize: "30px",
    lineHeight: 1.2,
    color: "#f5f5f5",
    fontWeight: 400,
    letterSpacing: "-0.01em",
  } as SxProps<Theme>,

  subtitle: {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.3)",
    mt: 0.8,
    fontWeight: 300,
  } as SxProps<Theme>,

  // ── CHANGE 17: divider now DPS cyan tint ──
  divider: {
    height: "1px",
    background: "rgba(0, 188, 212, 0.15)",
    mb: 3.5,
  } as SxProps<Theme>,

  statusError: {
    mt: 2.5,
    px: 2,
    py: 1.5,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: 1,
    // ── CHANGE 18: error uses DPS pink instead of plain red ──
    background: "rgba(233, 30, 140, 0.08)",
    border: "1px solid rgba(233, 30, 140, 0.25)",
  } as SxProps<Theme>,

  // ── CHANGE 19: success now uses green ──
  statusSuccess: {
    mt: 2.5,
    px: 2,
    py: 1.5,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: 1,
    background: "rgba(34, 197, 94, 0.08)",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  } as SxProps<Theme>,

  statusText: (isError: boolean) => ({
    fontSize: "13px",
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,
    // ── CHANGE 20: error text DPS pink, success text green ──
    color: isError ? "#E91E8C" : "#22C55E",
  }) as SxProps<Theme>,

  footer: {
    mt: 3.5,
    fontSize: "11.5px",
    color: "rgba(255,255,255,0.15)",
    fontFamily: '"DM Sans", sans-serif',
    textAlign: "center",
    letterSpacing: "0.02em",
  } as SxProps<Theme>,
}