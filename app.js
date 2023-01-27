const express = require('express');
const app = express(); 
const  test = require('./routes/test');
app.use(express.json());

app.use((req, res, next) => { //route for cross-domain routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/',test);


module.exports = app ; 