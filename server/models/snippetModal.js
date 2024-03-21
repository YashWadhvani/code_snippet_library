import mongoose from "mongoose";
const snippetSchema = new mongoose.Schema({
  title: String,
  language: String,
  description: String,
  imageUrl: String,
  sourceCode: String,
  snippetCount: Number,
});

const Snippet = mongoose.model("snippets", snippetSchema);
export default Snippet;
