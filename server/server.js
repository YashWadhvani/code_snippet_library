import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import Snippet from "./models/snippetModal.js";
// import snippetForm from "./snippetForm.js";

//env config
dotenv.config();

//Database Connection
connectDB();

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/snippets", async (req, res) => {
  const snippets = await Snippet.find()
    .then((snippets) => res.json(snippets))
    .catch((e) => console.log(e));
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}.`);
});
