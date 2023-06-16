import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  const jokes = await Joke.find();
  response.status(200).json(jokes);
}
