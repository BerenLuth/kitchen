import React, { useState, useEffect } from "react";
import { recipes } from "../../assets/recipes/all";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Highlighter from "react-highlight-words";
import { useDebounce } from "@greendecision/hooks";

const ListRecipes: React.FC = () => {
  const nav = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [keyboardSearchPressed, setKeyboardSearchPressed] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.keyCode === 83 && !isSearching) {
        setKeyboardSearchPressed(true);
      }
      if (e.keyCode === 27) setIsSearching(false);
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isSearching) {
      setSearch("");
      setKeyboardSearchPressed(false);
    }
  }, [isSearching]);

  useDebounce(
    () => {
      if (keyboardSearchPressed) setIsSearching(true);
    },
    100,
    [keyboardSearchPressed]
  );

  return (
    <div className="Recipes-wrapper">
      <div className="Recipes-title-search">
        <h1>Recipes</h1>
        <IconButton
          onClick={() => {
            setIsSearching(!isSearching);
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div className="Recipes-search-bar" style={{ maxHeight: isSearching ? "200px" : "0px" }}>
        {isSearching && (
          <TextField
            value={search}
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value);
            }}
            autoFocus
          />
        )}
      </div>

      <div className="Recipes-list-container">
        {recipes
          .filter((recipe) => {
            if (search.length === 0) return true;
            return (
              recipe.name.toLowerCase().includes(search.toLowerCase()) ||
              recipe.description.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((recipe) => {
            return (
              <div
                key={recipe.id}
                onClick={() => {
                  nav(`/recipes/${recipe.id}`);
                }}
                className="Recipes-element"
              >
                <div className="Recipes-data">
                  <Highlighter
                    highlightClassName="Recipes-title"
                    unhighlightClassName="Recipes-title"
                    searchWords={[search]}
                    autoEscape={true}
                    textToHighlight={recipe.name}
                  />
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[search]}
                    autoEscape={true}
                    textToHighlight={recipe.description}
                  />
                </div>
                <img className="Recipes-pic" src={recipe.pictures[0]} alt={recipe.name} />
              </div>
            );
          })}
      </div>
      <div className="Recipes-hint">Press S to quick search</div>
    </div>
  );
};

export default ListRecipes;
