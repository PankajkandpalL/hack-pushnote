require('dotenv').config();
const fs = require('fs');
const path = require('path');

const requiredEnvVariables = ['PORT', 'DB_URL']; 

const missingVariables = requiredEnvVariables.filter((variable) => !process.env[variable]);

if (missingVariables.length > 0) {
  console.error(`Error: The following required environment variables are missing: ${missingVariables.join(', ')}`);
  process.exit(1);
} else {
  console.log('ENV check passed ✔');
  console.log(" Initialising the server...");
}