import { Recipe, Ingredient } from "../../types/recipeType";

const ingredients: Ingredient[] = [
  {
    name: "Pasta",
    quantity: 250,
    unit: "g",
  },
  {
    name: "Pomodorini",
    quantity: 50,
    unit: "g",
  },
  {
    name: "Passata di pomodoro",
    quantity: 150,
    unit: "g",
  },
  {
    name: "Pomodori secchi",
    quantity: 30,
    unit: "g",
  },
];

const steps = [
  "Mettere a bollire l'acqua per la pasta.",
  "Tagliare i pomodorini a metà e metterli in una padella con un filo d'olio.",
  "Aggiungere la passata di pomodoro e i pomodori secchi tagliati a pezzetti.",
  "Cuocere per 10 minuti.",
  "Cuocere la pasta e scolarla al dente.",
  "Saltare la pasta nella padella con il sugo.",
  "Servire con un filo d'olio e basilico fresco.",
];

const tags = ["pasta", "vegan"];

const pics: string[] = ["/recipesPics/pastaTrePomodori/cover.jpg"];

export const PastaTrePomodori: Recipe = {
  id: "pasta_tre_pomodori",
  name: "Pasta ai tre pomodori",
  ingredients,
  description: "Una pasta semplice e veloce",
  instructions: steps,
  pictures: pics,
  tags,
  source: "",
};
