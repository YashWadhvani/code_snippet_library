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
    .sort({ title: 1 })
    .then((snippets) => res.json(snippets))
    .catch((e) => console.log(e));
});

app.post("/snippets/:id/increment", async (req, res) => {
  try {
    const snippetId = req.params.id;
    // Find the snippet by its ID
    console.log(snippetId); //Ex
    const snippet = await Snippet.findById(snippetId);
    console.log(snippet); //Ex
    if (!snippet) {
      console.log("Not Found"); //Ex
      return res.status(404).json({ error: "Snippet not found" });
    }

    // Increment snippetCount by 1
    snippet.snippetCount += 1;
    // Save the updated snippet
    await snippet.save();

    // Send a success response
    res.status(200).json({ message: "Snippet count incremented successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error incrementing snippet count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}.`);
});
