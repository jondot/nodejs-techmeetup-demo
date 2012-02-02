var express = require('express');
var spawn = require("child_process").spawn;
var app = express.createServer();


app.get('/', function(req,res){
  res.header('Content-Type','text/plain');
  res.header('X-Content-Type-Options', 'nosniff');

  res.write("<bstinson> It's going to be legen\n\n");

  setTimeout(function(){
    res.write("<bstinson> wait for it..\n\n");

    setTimeout(function(){
      res.write("<bstinson> wait for it..!!!\n\n");

      setTimeout(function(){
        var tail = spawn('figlet', ['daaaaaary']);
        tail.stdout.on('data', function(data){
          res.write(data);
        });
        tail.stdout.on('end', function(data){
          res.end();
        });
      }, 2000);
    },2000);
  }, 2000);
});

console.log("going up mofo!");
app.listen(3000);




