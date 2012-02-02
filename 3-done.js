var http = require("http");
var spawn = require("child_process").spawn;

http.createServer(function(req,res){
  res.writeHead(200, {
    'Content-Type':'text/plain',
    'X-Content-Type-Options':'nosniff'
  });
  console.log("tailing");
  res.write("tailing...\n");
  var tail = spawn('tail', ['-f', '/var/log/nodelog.log']);
  req.connection.on('end', function(){
    tail.kill();
  });

  tail.stdout.on('data', function(data){
    console.log(data);
    res.write(data);
  });
}).listen(3000);
