import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../../assets/recipes/all";

import "./styles.css";
import { TextField } from "@mui/material";
import { useDebounce } from "@greendecision/hooks";
import PicList from "../../components/picList";
import { useMediaPredicate } from "react-media-hook";

const Recipe: React.FC = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);
  const preferredTheme = useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light";

  const [lastEdited, setLastEdited] = useState(-1);
  const [ingredientsQuantity, setIngredientsQuantity] = useState(
    recipe?.ingredients.map((ingredient) => ingredient.quantity) || []
  );

  useDebounce(
    () => {
      if (lastEdited === -1 || !recipe) return;
      const mult = ingredientsQuantity[lastEdited] / recipe.ingredients[lastEdited].quantity;
      console.log(mult);
      setIngredientsQuantity(recipe?.ingredients.map((ingredient) => Math.round(ingredient.quantity * mult)));
    },
    500,
    [lastEdited, ingredientsQuantity]
  );

  console.log("bg", recipe?.pictures[0]);

  const bg = preferredTheme === "dark" ? "#242424" : "#fff";

  return (
    <div className="Recipe-wrapper">
      {recipe && recipe?.pictures.length > 0 && (
        <div
          className="Recipe-cover"
          style={{
            backgroundImage: `linear-gradient(0deg, ${bg} 0%,rgba(0,0,0,0) 100%), url("${recipe?.pictures[0]}")`,
          }}
        />
      )}
      <div className="Recipe-title">{recipe?.name}</div>
      <div className="Recipe-description">{recipe?.description}</div>
      <div className="Recipe-section">
        <h3>Ingredienti</h3>
        {recipe?.ingredients.map((ingredient, index) => {
          return (
            <div
              className="Recipe-ingredients-element"
              key={ingredient.name}
              data-mui-color-scheme={preferredTheme === "dark" ? "dark" : "light"}
            >
              <span>{ingredient.name}</span>
              <TextField
                id="outlined-basic"
                label={ingredient.unit}
                variant="outlined"
                value={ingredientsQuantity[index]}
                onChange={(e) => {
                  setIngredientsQuantity((prev) => {
                    const newIngredientsQuantity = [...prev];
                    newIngredientsQuantity[index] = parseInt(e.target.value) || 0;
                    return newIngredientsQuantity;
                  });
                  setLastEdited(index);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="Recipe-section">
        {recipe?.instructions.map((step, index) => {
          return (
            <div className="Recipe-step" key={index}>
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
            </div>
          );
        })}
      </div>
      {recipe && recipe?.pictures?.length > 0 && (
        <div className="Recipe-section">
          <PicList pictures={recipe.pictures || []} />
        </div>
      )}
      <div className="Recipe-section">
        <h3>Source</h3>
        <a href={recipe?.source}>{recipe?.source}</a>
        <h3>Tags (non funzionano ancora)</h3>
        <div className="Recipe-tags-list">
          {recipe?.tags.map((tag) => {
            return <a href={`/tags/${tag}`}>#{tag}</a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
