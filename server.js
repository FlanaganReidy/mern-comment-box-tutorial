//server.js

'use strict'

//first we import our dependencies...
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//and create our instances

let app = express();
let router = express.Router();

let port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and
//look for JSON data in the request bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharin, we
//will set our headers to allow CORS with middleware
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*';);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods' 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headrs, Origin,Accept, X-REquested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cashing so we get the most recent Comments
  res.setHeader('Cashe-Control', 'no-cache');
  next();
});

//now we get to set the route path & initialize the API
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function(){
  console.log('api running on port ${port}')
});
