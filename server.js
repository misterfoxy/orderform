// DEPENDENCIES
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// GLOBAL VARIABLES
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const login = require('./login.js');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'testdb'
});

connection.connect(function(err, res){
  if(err){
    throw err;
  }
  console.log("Listening at DB")
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/order', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/order.html'));
});

app.get('/admin', function(req,res){

  connection.query('SELECT * FROM orders', function(err, result){
    if(err){
      throw err;
    }
    console.log(result);
  });

});

app.post('/data', function(req, res){
  let entry = req.body;
  console.log(entry);
  res.contentType('json');
  res.send({ some: JSON.stringify({response:'json'}) });
  connection.query('INSERT INTO orders(contact, color, category, style, user_input) VALUES(?)', entry, function(err, result){
    if(err){
      throw err;
    }
    console.log(result);
    connection.end();
  });
});
// INITIATE SERVER
app.listen(process.env.PORT || PORT, function(){
  console.log("Listening on PORT: " + PORT);
});
