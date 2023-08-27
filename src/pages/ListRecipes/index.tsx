import React from "react";
import { recipes } from "../../assets/recipes/all";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ListRecipes: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="Recipes-wrapper">
      <h1>Recipes</h1>
      <div className="Recipes-list-container">
        {recipes.map((recipe) => {
          return (
            <div
              onClick={() => {
                nav(`/recipes/${recipe.id}`);
              }}
              className="Recipes-element"
            >
              <div className="Recipes-data">
                <div className="Recipes-title">{recipe.name}</div>
                <div>{recipe.description}</div>
              </div>
              <img className="Recipes-pic" src={recipe.pictures[0]} alt={recipe.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListRecipes;
