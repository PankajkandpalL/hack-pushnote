require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.DB_URL;

const maxRetryAttempts = 10;
const retryDelay = 3000;

async function connectToDb() {
  let currentRetry = 0;

  while (currentRetry < maxRetryAttempts) {
    try {
      await mongoose.connect(uri);
      console.log("Successfully connected to MongoDB! ✔");
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
    }
  }
}

module.exports = {
    connectToDb
}
