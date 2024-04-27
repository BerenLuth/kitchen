import { Recipe, Ingredient } from "../../types/recipeType";

const ingredients: Ingredient[] = [
  {
    name: "Farina di farro integrale",
    quantity: 230,
    unit: "g",
  },
  {
    name: "Sale fino",
    quantity: 0.5,
    unit: "cucchiaino",
  },
  {
    name: "Acqua (tiepida)",
    quantity: 125,
    unit: "g",
  },
  {
    name: "Olio extravergine d'oliva (o di semi)",
    quantity: 1,
    unit: "cucchiaio",
  },
];

const steps = [
  "Versare la farina in una ciotola e aggiungere il sale.",
  "Aggiungere l'acqua e l'olio e impastare fino ad ottenere un composto omogeneo.",
  "Dividere l'impasto in 4 parti (se 230g di farina, altrimenti aggiustare in base alle quantità).",
  "Prendere una parte alla volta, renderla una palla, versare un velo di farina sul tagliere, appoggiare la palla, appiattirla col palmo della mano, versare un velo di farina sopra e stendere con il mattarello.",
  "Cuocere in padella antiaderente (molto calda) per 2 minuti per lato. (o finché non si formano delle bolle).",
  "Riporre la piadina in un piatto coperta da un canovaccio per mantenere morbide.",
  "Passare alla successiva e ripetere il procedimento.",
];

const tags = ["piadine", "vegan", "farro", "tortilla"];

const pics: string[] = ["/recipesPics/piadine/cover.jpg", "/recipesPics/piadine/piadine_farcite.jpg", "/recipesPics/piadine/piadine_pronte.jpg"];

export const PiadineAlFarro: Recipe = {
  id: "piadine_farro",
  name: "Piadine di farro integrale",
  ingredients,
  description: "Delle piadine ottime per farcire con ingredienti a piacere. (E perché proprio la frittata di tofu!)",
  instructions: steps,
  pictures: pics,
  tags,
  source: "",
};
