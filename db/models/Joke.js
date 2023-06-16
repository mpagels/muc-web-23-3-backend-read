import mongoose from "mongoose";

const { Schema, model } = mongoose;

const jokeSchema = new Schema({
  joke: { type: String, required: true },
  id: { type: String, required: true },
});

const Joke = mongoose.models.Joke || model("Joke", jokeSchema);

export default Joke;
