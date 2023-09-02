const mongoose = require("mongoose");

const Word = require("../api/models/word.model");
const allWords = [
  "poder",
  "bello",
  "cielo",
  "dulce",
  "estar",
  "fuego",
  "golpe",
  "hacha",
  "ideal",
  "joven",
  "luzca",
  "maton",
  "nacer",
  "argan",
  "papel",
  "quien",
  "risas",
  "sabor",
  "tabla",
  "union",
  "volar",
  "xenon",
  "yogur",
  "zafio",
  "alamo",
  "oxido",
  "sutil",
  "lugar",
  "ficha",
  "ambar",
  "peñon",
  "zorra",
  "hayas",
  "jugar",
  "aquel",
  "coche",
  "laico",
  "vasco",
  "humor",
  "fusca",
  "bruma",
  "censo",
  "olivo",
  "pompa",
  "curar",
  "ratos",
  "lento",
  "azote",
  "angel",
  "arbol",
  "alamo",
  "docil",
  "oliva",
  "foton",
  "hazlo",
  "grapa",
  "bruto",
  "utero",
  "largo",
  "afila",
  "lomos",
  "pulpo",
  "cesta",
  "rayos",
  "huero",
  "lunar",
  "cesto",
  "beodo",
  "nefro",
  "atino",
  "idolo",
  "debil",
  "barro",
  "carro",
  "velas",
  "cunas",
  "bozal",
  "siete",
  "gente",
  "ganar",
  "serio",
  "calle",
  "rizar",
  "caída",
  "bosca",
  "cello",
  "malas",
  "seras",
  "costa",
  "cable",
  "fuera",
  "creer",
  "grito",
  "lecho",
  "debil",
  "salto",
  "lunar",
  "joven",
  "tiene",
  "lomos",
];

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.8phs6yk.mongodb.net/test?retryWrites=true&w=majority"
  )

  .then(async () => {
    const allWords = await Word.find();
    if (allWords.length > 0) {
      await Word.collection.drop();
      console.log("Palabras borradas");
    }
  })
  .catch((error) => console.log("error borrando palabras", error))

  .then(async () => {
    const wordsFive = new Word({
      length: 5,
      word: allWords,
    });
    console.log(wordsFive);
    await Word.insertMany(wordsFive);

    console.log("Palabras insertadas");
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());
