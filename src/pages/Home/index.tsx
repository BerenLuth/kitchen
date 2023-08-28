import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const Home: React.FC = () => {
  const nav = useNavigate();

  return (
    <div>
      <h1>Tante bele ricete yeee</h1>
      <a onClick={() => nav("/recipes")}>Ricettine (tutte veg)</a>
    </div>
  );
};

export default Home;
