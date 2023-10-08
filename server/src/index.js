require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const { connectToDb } = require('./config/dbConfig');
const { health } = require('./heathCheckups/healthCheckups');
const { authRouter } = require('./features/auth/auth.routes');
const cors = require("cors");
const allowedOrigins = require('./config/cors/allowedOrigins');
const { generalErrorHandler } = require('./errorHandling/generalErrorHandler');
const { authErrorHandler } = require('./errorHandling/authErrorHandler');

const app = express();
app.use(express.json({ limit : "1mb" }))
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(allowedOrigins));

app.use("/v1/health", health);
app.use("/v1/auth", authRouter);
app.use(authErrorHandler, generalErrorHandler)

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