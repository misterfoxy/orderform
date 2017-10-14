// DEPENDENCIES
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// GLOBAL VARIABLES
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const login = require('./login.js');

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

app.post('/data', function(req, res){
  let entry = req.body.entry;
  connection.query('INSERT INTO orders(contact, color, category, style, user_input) VALUES(?)', entry, function(err, res){
    if(err){
      throw err;
    }
    console.log(res);
  });
  connection.end();
});
// INITIATE SERVER
app.listen(process.env.PORT || PORT, function(){
  console.log("Listening on PORT: " + PORT);
});
