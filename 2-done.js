
// npm install ejs

var express = require('express');
var app = express.createServer();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req,res){
  res.render('2-index');
});

console.log("going up mofo!");
app.listen(3000);




