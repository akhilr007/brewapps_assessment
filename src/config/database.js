const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/bookstore_dev_db");
  console.log("mongodb database connection established");
};

module.exports = connect;
