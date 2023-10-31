const BookService = require("../services/bookService");

const bookService = new BookService();

const create = async (req, res) => {
  try {
    const response = await bookService.create({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    });
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully added a new book",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry cant add a new book",
      err: { error },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await bookService.getAll();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully, fetched all books",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry cant fetch all books",
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await bookService.getById(req.params.id);
    if (response === null) {
      return res.status(404).json({
        data: null,
        message: "cant fetch a book with a given id",
      });
    }
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully, fetched a book",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry cant fetch a book",
      err: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await bookService.delete(req.params.id);
    if (response === null) {
      return res.status(404).json({
        data: null,
        message: "cant delete a book :: Book with a given id is not found",
      });
    }

    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully, delete a book",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry cant delete a book",
      err: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await bookService.update(req.params.id, req.body);
    if (response === null) {
      return res.status(404).json({
        data: null,
        message: "cant update a book :: Book with a given id is not found",
      });
    }
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully, update a book",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry cant update a book",
      err: { error },
    });
  }
};

module.exports = { create, get, getAll, update, destroy };
