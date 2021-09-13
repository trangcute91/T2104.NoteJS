var express= require("express");
var app= express();
var port= process.env.PORT || 5000;
app.listen(port,function (){
    console.log("sever is running");
});
app.use(express.static("public"));
app.set("view engine","ejs");
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
// app.get("/home",function (req,res){
//     count++;
//     res.render("home",{
//         count: count
//     });
// });
// //     var product=[
//         {
//             id:1,
//             name:"product 1",
//             image:"fileams6/anh1.jpg",
//     },
//         {
//             id:2,
//             name:"product 2",
//             image:"fileams6/anh1.jpg",
//         },
//         {
//             id:3,
//             name:"product 3",
//             image:"fileams6/anh1.jpg",
//         },
//
//     ];
// app.get("/ketoan",function (req,res){
//     res.render("home",{
//         product:product
//     });
// });
// app.get("/",function (req,res){ // trang chu
//     // res.send("<html><head><title</head></html>"); // html- chỉ là 1 chuỗi đối với máy chủ
//     // res.sendFile(__dirname+"/public/demobootstrap.html");  //__dirname -> xuất cho chúng ta 1 chuỗi đường dẫn chính xác trên máy tính đến thư mục này
//     count++;
//     res.render("home",{
//         products:product
//     });// tu dong hieu de lay file home.ejs trong thu muc views
// });
// app.get("/chi-tiet",function (req,res){
//     var masp= req.query.id;
//     var p={};
//     for( var i=0;i<product.length;i++){
//         ìf( product[i].id == masp){
//             p=product[i];
//             break;
//         }
//     }
//     res.render("chitiet",{
//         masp:masp
//     });
// });
// app.get("/chi-tiet2/:id",function (req,res){
//     var masp= req.params.id;
//     var p={};
//     for( var i=0;i<product.length;i++){
//         ìf( product[i].id == masp){
//             p=product[i];
//             break;
//         }
//     }
//     res.render("chitiet",{
//         masp:masp
//     });
// });
//khai bao ket
var mssql = require("mssql");
var config ={//thong tin may chu
    sever :"DESKTOP-MSSSJJI\\SQLEXPRESS",
    user:"sa",
    password:"sa123",
    database:"lad9",
    stream: false,
    port:1433,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
}//
mssql.connect(config,function (err)){
    if(err)console(err);
    else console.log("connect")
};