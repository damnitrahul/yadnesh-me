const express = require("express");
const http = require("http");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");

});

app.get("/contact", function(req,res){

  res.sendFile(__dirname + "/contact.html");

});

app.listen(3000, function(){
  console.log("Server running at port 3000.")
});
