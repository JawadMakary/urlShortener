const express = require("express");
const dotenv = require("dotenv");
const DB = require("./database").connectDB;
const app = express();
dotenv.config();

// route defining
const urlRoutes = require("./routes/urlRoutes.");
const indexRoutes = require("./routes/indexRoute");
// Connection to DB
DB();
// tell the server that its dealing with json
app.use(express.json());
app.use("/", indexRoutes);
app.use("/api/url", urlRoutes);

//  listen to port
app.listen(process.env.PORT, () => {
  console.log("listening on port" + process.env.PORT);
});
