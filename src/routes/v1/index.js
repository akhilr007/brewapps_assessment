const express = require("express");

const {
  create,
  getAll,
  get,
  destroy,
  update,
} = require("../../controllers/bookController");

const router = express.Router();

router.post("/books", create);

router.get("/books", getAll);

router.get("/books/:id", get);

router.delete("/books/:id", destroy);

router.put("/books/:id", update);

module.exports = router;
