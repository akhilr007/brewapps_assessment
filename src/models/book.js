const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },

    author: {
      type: "string",
      required: true,
    },

    summary: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
