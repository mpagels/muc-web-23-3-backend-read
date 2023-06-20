import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    response.status(200).json(jokes);
  }

  if (request.method === "POST") {
    try {
      const jokeData = request.body;
      await Joke.create({ ...jokeData, id: "20" });

      response.status(201).json({ status: "joke created" });
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error", message: error });
    }
  }
}
