export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F5F5F5",
    50: "#EEEEEE",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0F0F0F",
    1000: "#000000",
  },
  primary: {
    50: "#FFFFFF",
    100: "#EAEAEA",
    200: "#CCCCCC",
    300: "#AAAAAA",
    400: "#888888",
    500: "#000000", 
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
};


export const themeSettings = (mode) => {
  return {
    palette: {
      mode,
      primary: {
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500], // black
        light: colorTokens.primary[100], // light gray
      },
      neutral: {
        dark: colorTokens.grey[800],
        main: colorTokens.grey[600],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[200],
        light: colorTokens.grey[50],
      },
      background: {
        default: mode === "dark"
          ? colorTokens.grey[900]
          : colorTokens.grey[10],
        alt: mode === "dark"
          ? colorTokens.grey[800]
          : colorTokens.grey[0],
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  };
};
