var express= require("express");
var app= express();
var port=5000;
app.listen(port,function (){
    console.log("sever is running");
});
app.use(express.static("public"));
app.set("view engine","ejs");
var count=0;
app.get("/",function (req,res){
    // res.send("xin chao quy khach....");
    res.sendfile(__dirname+"/public/layoutdemo.html")

});
app.get("/ke-toan",function (req,res){
    res.sendfile(__dirname+"/public/ams3.html")
});
app.get("/ams4",function (req,res){
    res.sendfile(__dirname+"/public/ams4.html")

});
app.get("/lad3",function (req,res){
    res.sendfile(__dirname+"/public/lad3.html")
});
app.get("/home",function (req,res){
    count++;
    res.render("home",{
        count: count
    });
});
    var product=[
        {
            id:1,
            name:"product 1",
            image:"fileams6/anh1.jpg",
    },
        {
            id:2,
            name:"product 2",
            image:"fileams6/anh1.jpg",
        },
        {
            id:3,
            name:"product 3",
            image:"fileams6/anh1.jpg",
        },

    ];
app.get("/ketoan",function (req,res){
    res.render("home",{
        product:product
    });
});