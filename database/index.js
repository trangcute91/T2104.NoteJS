var express = require("express");
var app = express(); // tao 1 ung dung tu express module
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("Server is running....");
});
// cap quyen truy cap cac file static (css, img, jquery...)
app.use(express.static("public"));
app.set("view engine","ejs");// Báo rằng sẽ sử dụng ejs làm view engine
//----------------------------------------------
var sql = require('mssql');



// khai bao de ket noi database
var mssql = require("mssql");
var config = { // thong tin may chu
    server: "localhost",
    user:"sa",
    password:"sa123",
    database:"ass5",
    stream: false,
    port:1433,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
};
var ConnectionConfig = {
    server: 'localhost',
    authentication: { type: 'default', options: { userName: 'sa', password: 'sa123' } },
    database:"ass5",
    options: { encrypt:false }}

mssql.connect(ConnectionConfig,function (err){
    if(err) console.log(err)
    else console.log("Connected")
})
app.get("/",function (req,res){ // trang chu
    res.send("Trang chu");
});
app.get("/khach-hang",function (req,res){
    // can lay danh sach khach hang
    var txt_sql = "select * from Ass5_KhachHang;";
    sql.query(txt_sql,function (err,rs){ // callback
        if(err) res.send(err);
        else res.send(rs.recordset);// rows.recordset : 1 array, mỗi element là 1 object từ table
    })
});
// app.get("/hang-hoa",function (req,res){
//     // can lay danh sach khach hang
//     var txt_sql = "select * from Ass5_HangHoa;";
//     sql.query(txt_sql,function (err,rs){ // callback
//         if(err) res.send(err);
//         else res.render("home",{
//            hanghoa:rs.recordset
//         })
//
//     })
// });
app.get("/home",function (req,res){ // trang chu
    res.render("home");
});