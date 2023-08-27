import { Recipe } from "../../types/recipeType";

export const ExampleRecipe: Recipe = {
  id: "example",
  name: "Example Recipe",
  description: "An example recipe",
  ingredients: [
    {
      name: "Ingredient 1",
      quantity: 1,
      unit: "unit",
    },
    {
      name: "Ingredient 2",
      quantity: 2,
      unit: "unit",
    },
  ],
  instructions: ["Instruction 1", "Instruction 2"],
  pictures: ["vite.svg"],
  tags: ["tag1", "tag2"],
  source: "https://www.example.com",
};
