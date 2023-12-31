import { createTheme } from "@mui/material/styles";

export const AppThemeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#01ACB2",
    },
    secondary: {
      main: "#0eaa00",
    },
  },
  typography: {
    fontSize: 13,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export const AppThemeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#01ACB2",
    },
    secondary: {
      main: "#0eaa00",
    },
  },
  typography: {
    fontSize: 13,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
