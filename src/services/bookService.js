const BookRepository = require("../repository/bookRepository");

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async create(data) {
    try {
      const book = await this.bookRepository.create(data);
      return book;
    } catch (error) {
      console.log("something went wrong in book service");
      throw error;
    }
  }

  async getAll() {
    try {
      const books = await this.bookRepository.getAll();
      return books;
    } catch (error) {
      console.log("Something went wrong in book service");
      throw error;
    }
  }

  async getById(id) {
    try {
      const book = await this.bookRepository.get(id);
      return book;
    } catch (error) {
      console.log("Something went wrong in book service");
      throw error;
    }
  }

  async delete(id) {
    try {
      const book = await this.bookRepository.destroy(id);
      return book;
    } catch (error) {
      console.log("Something went wrong in book service");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const book = await this.bookRepository.update(id, data);
      return book;
    } catch (error) {
      console.log("Something went wrong in book service");
      throw error;
    }
  }
}

module.exports = BookService;
