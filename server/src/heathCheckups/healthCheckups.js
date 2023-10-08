const express = require('express');

const health = express.Router();

health.get('/', (req, res)=>{
    return res.send("API is working fine")
})

module.exports = {
    health
}