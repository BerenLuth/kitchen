import { Box } from "@mui/system";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./pages/recipe";
import ListRecipes from "./pages/ListRecipes";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
        <Box component="main" sx={{ flexGrow: 1, padding: 0 }}>
          <Routes>
            <Route path="/" element={<ListRecipes />} />
            <Route path="/recipes" element={<ListRecipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
