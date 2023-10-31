const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const connect = require("./config/database");
const apiRoutes = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const PORT = 8000;

const setupAndStartServer = async () => {
  app.listen(PORT, async (req, res) => {
    console.log("listening on port" + PORT);
    mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((err) => {
        console.error("Error connecting to the database:", err);
      });
  });
};

setupAndStartServer();
