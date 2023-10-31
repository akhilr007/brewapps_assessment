const Book = require("../models/book");

class BookRepository {
  async create(data) {
    try {
      const book = await Book.create(data);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const books = await Book.find();
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const book = await Book.findById(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const book = await Book.findByIdAndRemove(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const book = await Book.findByIdAndUpdate(id, data, { new: true });
      return book;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BookRepository;
