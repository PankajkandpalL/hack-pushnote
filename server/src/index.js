require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const { connectToDb } = require('./config/dbConfig');

const app = express();
app.use(express.json({ limit : "1mb" }))
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.listen(process.env.PORT, async()=>{
    try{
        await connectToDb(); 
        console.log('Server Initialised ✔');
        console.log(`API gateway running on PORT ${process.env.PORT}`);
    }
    catch(e){
        console.error(e)
    }
})