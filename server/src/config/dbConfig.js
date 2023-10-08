require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDb() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged the deployment. Successfully connected to MongoDB! ✔");
  } finally {
    await client.close();
  }
}

module.exports = {
    connectToDb
}