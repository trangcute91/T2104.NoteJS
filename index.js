var express = require("express");
var app = express();
var port = 5000;
app.listen(port,function (){
    console.log("sever is running....");
});
app.use(express.static("public"));

app.get("/home",function (req,res) {
    res.sendFile(__dirname+"/public/....")
});

app.get("/ke-toan",function (req,res) {
    res.sendFile(__dirname+"/public/....")
});
