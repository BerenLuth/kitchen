import { createTheme } from "@mui/material/styles";

export const AppTheme = createTheme({
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
