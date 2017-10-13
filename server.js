// DEPENDENCIES
const express = require('express');
const path = require('path');
// GLOBAL VARIABLES
const app = express();
const PORT = 3000;

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
