const express = require("express");
const bodyParser = require("body-parser");

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
    await connect();
  });
};

setupAndStartServer();
