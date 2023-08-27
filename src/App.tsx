import { Box } from "@mui/system";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./pages/recipe";
import ListRecipes from "./pages/ListRecipes";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { AppThemeDark, AppThemeLight } from "./settings";
import { useMediaPredicate } from "react-media-hook";

function App() {
  const theme = useMediaPredicate("(prefers-color-scheme: dark)") ? AppThemeDark : AppThemeLight;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
          <Box component="main" sx={{ flexGrow: 1, padding: 0 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<ListRecipes />} />
              <Route path="/recipes/:id" element={<Recipe />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
