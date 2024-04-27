import { Recipe, Ingredient } from "../../types/recipeType";

const ingredients: Ingredient[] = [
  {
    name: "Lenticchie rosse",
    quantity: 250,
    unit: "g",
  },
  {
    name: "Carota",
    quantity: 1,
    unit: "",
  },
  {
    name: "Cipolla",
    quantity: 1,
    unit: "",
  },
  {
    name: "Verdura a piacere (spinaci, zucchine, peperoni, ecc.)",
    quantity: 1,
    unit: "",
  },
  {
    name: "Aglio",
    quantity: 1,
    unit: "spicchio",
  },
];

const steps = [
  "Lasciare le lenticchie in ammollo per almeno 2 ore.",
  "Scolare le lenticchie e sciacquarle bene.",
  "Grattugiare la carota.",
  "Pulire e tagliare cipolla e verdure a piacere a pezzi grossolani.",
  "Mescolare le lenticchie con le verdure tritate.",
  "Aggiungere sale e spezie a piacere (es. curcuma, pepe, paprika).",
  "Frullare il composto.",
  "Formare delle polpette e cuocerle in padella con un filo d'olio, circa 5 minuti per lato, o fin che non si forma una crosticina e si staccano dalla padella.",
];

const tags = ["ppolpette", "lenticchie", "proteiche", "facili"];

const pics: string[] = ["/recipesPics/polpetteLenticchie/cover.jpg", "/recipesPics/polpetteLenticchie/polpette_piadina.jpg", "/recipesPics/polpetteLenticchie/polpette_piadina_2.jpg", "/recipesPics/polpetteLenticchie/polpette_piadina_3.jpg"];

export const PolpetteLenticchie: Recipe = {
  id: "polpette_lenticchie",
  name: "Polpette di lenticchie alle verdure",
  ingredients,
  description: "Delle piadine ottime per accompagnare un insalata o in una piadina.",
  instructions: steps,
  pictures: pics,
  tags,
  source: "",
};
