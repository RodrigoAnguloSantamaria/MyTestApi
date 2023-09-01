const express = require("express");
const wordRouter = express.Router();

const { RAE } = require("rae-api");

const rae = new RAE();

wordRouter.get("/:palabra", async (req, res) => {
  const { palabra } = req.params;

  const search = await rae.searchWord(palabra);
  const result = search.results;
  console.log(search.results);
  if (search.results.length != 0) {
    return res.status(200).json({ palabra: "true" });
  } else {
    return res.status(404).json({ palabra: "false" });
  }
});

module.exports = wordRouter;
