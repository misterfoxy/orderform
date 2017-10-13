// DEPENDENCIES
const express = require('express');
const path = require('path');
const mysql = require('mysql');
// GLOBAL VARIABLES
const app = express();
const PORT = 3000;

var login = require('./login.js');

const connection = mysql.createConnection({ login });

connection.connect(function(){
  console.log("Listening at DB")
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/order', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/order.html'));
});

// INITIATE SERVER
app.listen(process.env.PORT || PORT, function(){
  console.log("Listening on PORT: " + PORT);
});
