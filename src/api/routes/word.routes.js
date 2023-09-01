const express = require("express");
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

module.exports = wordRouter;
