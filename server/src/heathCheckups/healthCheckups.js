const express = require('express');

const health = express.Router();

health.get('/', (req, res)=>{
  return res.status(200).send({ message : 'API is working fine' })
})

health.get("/token", (req,res)=>{
  if (req.session && req.session.accessToken) {
    return res.json({ message: 'This is a protected route. Token is present' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }

})

module.exports = {
    health
}