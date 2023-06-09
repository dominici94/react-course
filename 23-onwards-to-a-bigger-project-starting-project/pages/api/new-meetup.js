import { MongoClient } from "mongodb";

// route: /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Destructuring don't needed, insert all data in document.
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t33brg1.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
