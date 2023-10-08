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

const maxRetryAttempts = 10;
const retryDelay = 3000;

async function connectToDb() {
  let currentRetry = 0;

  while (currentRetry < maxRetryAttempts) {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged the deployment. Successfully connected to MongoDB! ✔");
      return;
    } catch (err) {
      console.error(`Connection attempt ${currentRetry + 1} failed: ${err.message}`);
      currentRetry++;

      if (currentRetry < maxRetryAttempts) {
        console.log(`Retrying in ${retryDelay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      } else {
        console.error(`Max retry attempts (${maxRetryAttempts}) reached. Connection failed.`);
        throw err;
      }
    } finally {
        await client.close();
    }
  }
}

module.exports = {
    connectToDb
}
