const express = require("express");
const Word = require("../models/word.model");
const wordRouter = express.Router();

wordRouter.get("/:palabra", async (req, res) => {
  const { palabra } = req.params;

  const call = await fetch(`https://dle.rae.es/${palabra}`);
  const text = await call.text();
  const wordExist = text.includes("Aviso:");

  if (wordExist) {
    return res.status(404).json({ resultado: "No existe" });
  } else {
    return res.status(200).json({ resultado: "Si existe" });
  }
});

wordRouter.get("/word/:length/:number", async (req, res) => {
  const { length, number } = req.params;
  try {
    const call = await Word.findOne({ length: length });
    const palabra = call.word[number];
    return res.status(200).send(palabra);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = wordRouter;
