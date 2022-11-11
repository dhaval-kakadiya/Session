require("dotenv").config();
require("./config/db");
const express = require("express");
const app = express();
const port = process.env.PORT;
const ejs = require("ejs");
const path = require("path");
const router = require("./routes/index");
const session = require("express-session");
const Mongostore = require("connect-mongo");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server Listning On Port ${port}`);
});
