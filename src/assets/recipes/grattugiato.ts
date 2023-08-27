import { Recipe, Ingredient } from "../../types/recipeType";

const ingredients: Ingredient[] = [
  {
    name: "Frutta secca (anacardi o mandorle pelate)",
    quantity: 200,
    unit: "g",
  },
  {
    name: "Lievito alimentare",
    quantity: 20,
    unit: "g",
  },
  {
    name: "Sale",
    quantity: 3,
    unit: "g",
  },
  {
    name: "Miso",
    quantity: 2,
    unit: "g",
  },
];

const steps = [
  "Pesare tutti gli ingredienti e metterli nel mixer.",
  "Tritare fino ad ottenere la granulosità desiderata.",
  "Conserva in un barattolo di vetro in frigorifero per 1-2 mesi.",
];

const tags = ["pasta", "vegan", "senza glutine", "senza zucchero"];

const pics: string[] = ["/recipesPics/grattugiato/cover.jpg", "/recipesPics/pastaTrePomodori/cover.jpg"];

export const Grattugiato: Recipe = {
  id: "grattugiato_cucina_botanica",
  name: "Grattugiato di mandorle",
  ingredients,
  description: "Un grattugiato di mandorle per condire i tuoi piatti",
  instructions: steps,
  pictures: pics,
  tags,
  source: "https://www.youtube.com/watch?v=Gseew3mWBxk",
};
