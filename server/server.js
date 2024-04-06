import express from "express";
// import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import { spawn } from "child_process";
import connectDB from "./config/db.js";
import Snippet from "./models/Snippet.js";
// import { ChildProcess } from "child_process";
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

// spawn = ChildProcess;
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

app.post("/execute-python-script", (req, res) => {
  const pythonProcess = spawn("python", ["main.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
    res.send({ success: true, message: "Python script executed successfully" });
  });
});

app.post("/snippets/:id/increment", async (req, res) => {
  try {
    const snippetId = req.params.id;
    // Find the snippet by its ID
    // console.log(snippetId); //Ex
    const snippet = await Snippet.findById(snippetId);
    // console.log(snippet); //Ex
    if (!snippet) {
      // console.log("Not Found"); //Ex
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
