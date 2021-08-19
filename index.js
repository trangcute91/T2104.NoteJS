var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("sever is running....");
});
app.use(express.static("public"));

//------------ THANH--------------//

app.get("/home",function (req,res) {
    res.sendFile(__dirname+"/public/HOME.html")
});

app.get("/cheatcake",function (req,res) {
    res.sendFile(__dirname+"/public/cheat cake.html")
});
app.get("/buynow1",function (req,res) {
    res.sendFile(__dirname+"/public/buynow1.html")
});
app.get("/buynow2",function (req,res) {
    res.sendFile(__dirname+"/public/buynow2.html")
});
app.get("/buynow3",function (req,res) {
    res.sendFile(__dirname+"/public/buynow3.html")
});
app.get("/buynow4",function (req,res) {
    res.sendFile(__dirname+"/public/buynow4.html")
});
app.get("/buynow5",function (req,res) {
    res.sendFile(__dirname+"/public/buynow5.html")
});
app.get("/buynow6",function (req,res) {
    res.sendFile(__dirname+"/public/buynow6.html")
});
app.get("/buynow7",function (req,res) {
    res.sendFile(__dirname+"/public/buynow7.html")
});
app.get("/buynow8",function (req,res) {
    res.sendFile(__dirname+"/public/buynow8.html")
});
app.get("/buynow9",function (req,res) {
    res.sendFile(__dirname+"/public/buynow9.html")
});
app.get("/buynow10",function (req,res) {
    res.sendFile(__dirname+"/public/buynow10.html")
});
app.get("/buynow11",function (req,res) {
    res.sendFile(__dirname+"/public/buynow11.html")
});
app.get("/buynow12",function (req,res) {
    res.sendFile(__dirname+"/public/buynow12.html")
});
app.get("/buynow13",function (req,res) {
    res.sendFile(__dirname+"/public/buynow13.html")
});
app.get("/buynow14",function (req,res) {
    res.sendFile(__dirname+"/public/buynow14.html")
});
app.get("/buynow15",function (req,res) {
    res.sendFile(__dirname+"/public/buynow15.html")
});
app.get("/buynow16",function (req,res) {
    res.sendFile(__dirname+"/public/buynow16.html")
});
app.get("/buynow17",function (req,res) {
    res.sendFile(__dirname+"/public/buynow17.html")
});
app.get("/buynow18",function (req,res) {
    res.sendFile(__dirname+"/public/buynow18.html")
});
app.get("/buynow19",function (req,res) {
    res.sendFile(__dirname+"/public/buynow19.html")
});
app.get("/buynow20",function (req,res) {
    res.sendFile(__dirname+"/public/buynow20.html")
});
app.get("/buynow21",function (req,res) {
    res.sendFile(__dirname+"/public/buynow21.html")
});
app.get("/buynow22",function (req,res) {
    res.sendFile(__dirname+"/public/buynow22.html")
});
app.get("/buynow23",function (req,res) {
    res.sendFile(__dirname+"/public/buynow23.html")
});
app.get("/buynow24",function (req,res) {
    res.sendFile(__dirname+"/public/buynow24.html")
});
app.get("/buynow25",function (req,res) {
    res.sendFile(__dirname+"/public/buynow25.html")
});
app.get("/buynow26",function (req,res) {
    res.sendFile(__dirname+"/public/buynow26.html")
});
app.get("/buynow27",function (req,res) {
    res.sendFile(__dirname+"/public/buynow27.html")
});
app.get("/buynow28",function (req,res) {
    res.sendFile(__dirname+"/public/buynow28.html")
});
app.get("/buynow29",function (req,res) {
    res.sendFile(__dirname+"/public/buynow29.html")
});
app.get("/buynow30",function (req,res) {
    res.sendFile(__dirname+"/public/buynow30.html")
});
app.get("/buynow31",function (req,res) {
    res.sendFile(__dirname+"/public/buynow31.html")
});
app.get("/buynow32",function (req,res) {
    res.sendFile(__dirname+"/public/buynow32.html")
});
app.get("/buynow33",function (req,res) {
    res.sendFile(__dirname+"/public/buynow33.html")
});
app.get("/account",function (req,res) {
    res.sendFile(__dirname+"/public/Account.html")
});
app.get("/map",function (req,res) {
    res.sendFile(__dirname+"/public/Map.html")
});


//--------- QUANG ANH-----------//
app.get("/menucupcake",function (req,res) {
    res.sendFile(__dirname+"/public/menucupcake.html")
});
app.get("/cupcake1",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake1.html")
});
app.get("/cupcake2",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake2.html")
});
app.get("/cupcake3",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake3.html")
});
app.get("/cupcake4",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake4.html")
});
app.get("/cupcake5",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake5.html")
});
app.get("/cupcake6",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake6.html")
});
app.get("/cupcake7",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake7.html")
});
app.get("/cupcake8",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake8.html")
});
app.get("/cupcake9",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake9.html")
});
app.get("/cupcake10",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake10.html")
});
app.get("/cupcake11",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake11.html")
});
app.get("/cupcake12",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake12.html")
});
app.get("/cupcake13",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake13.html")
});
app.get("/cupcake14",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake14.html")
});
app.get("/cupcake15",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake15.html")
});
app.get("/cupcake16",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake16.html")
});
app.get("/cupcake17",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake17.html")
});
app.get("/cupcake18",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake18.html")
});
app.get("/cupcake19",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake19.html")
});
app.get("/cupcake20",function (req,res) {
    res.sendFile(__dirname+"/public/cupcake20.html")
});
app.get("/menupie",function (req,res) {
    res.sendFile(__dirname+"/public/menupie.html")
});
app.get("/pie1",function (req,res) {
    res.sendFile(__dirname+"/public/pie1.html")
});
app.get("/pie2",function (req,res) {
    res.sendFile(__dirname+"/public/pie2.html")
});
app.get("/pie3",function (req,res) {
    res.sendFile(__dirname+"/public/pie3.html")
});
app.get("/pie4",function (req,res) {
    res.sendFile(__dirname+"/public/pie4.html")
});
app.get("/pie5",function (req,res) {
    res.sendFile(__dirname+"/public/pie5.html")
});
app.get("/pie6",function (req,res) {
    res.sendFile(__dirname+"/public/pie6.html")
});
app.get("/pie7",function (req,res) {
    res.sendFile(__dirname+"/public/pie7.html")
});
app.get("/pie8",function (req,res) {
    res.sendFile(__dirname+"/public/pie8.html")
});
app.get("/pie9",function (req,res) {
    res.sendFile(__dirname+"/public/pie9.html")
});
app.get("/pie10",function (req,res) {
    res.sendFile(__dirname+"/public/pie10.html")
});
app.get("/pie11",function (req,res) {
    res.sendFile(__dirname+"/public/pie11.html")
});
app.get("/pie12",function (req,res) {
    res.sendFile(__dirname+"/public/pie12.html")
});
app.get("/pie13",function (req,res) {
    res.sendFile(__dirname+"/public/pie13.html")
});
app.get("/pie14",function (req,res) {
    res.sendFile(__dirname+"/public/pie14.html")
});
app.get("/pie15",function (req,res) {
    res.sendFile(__dirname+"/public/pie15.html")
});
app.get("/pie16",function (req,res) {
    res.sendFile(__dirname+"/public/pie16.html")
});
app.get("/pie17",function (req,res) {
    res.sendFile(__dirname+"/public/pie17.html")
});
app.get("/pie18",function (req,res) {
    res.sendFile(__dirname+"/public/pie18.html")
});
app.get("/pie19",function (req,res) {
    res.sendFile(__dirname+"/public/pie19.html")
});
app.get("/pie20",function (req,res) {
    res.sendFile(__dirname+"/public/pie20.html")
});
app.get("/menudonut",function (req,res) {
    res.sendFile(__dirname+"/public/menudonut.html")
});
app.get("/donut1",function (req,res) {
    res.sendFile(__dirname+"/public/donut1.html")
});
app.get("/donut2",function (req,res) {
    res.sendFile(__dirname+"/public/donut2.html")
});
app.get("/donut3",function (req,res) {
    res.sendFile(__dirname+"/public/donut3.html")
});
app.get("/donut4",function (req,res) {
    res.sendFile(__dirname+"/public/donut4.html")
});
app.get("/donut5",function (req,res) {
    res.sendFile(__dirname+"/public/donut5.html")
});
app.get("/donut6",function (req,res) {
    res.sendFile(__dirname+"/public/donut6.html")
});
app.get("/donut7",function (req,res) {
    res.sendFile(__dirname+"/public/donut7.html")
});
app.get("/donut8",function (req,res) {
    res.sendFile(__dirname+"/public/donut8.html")
});
app.get("/donut9",function (req,res) {
    res.sendFile(__dirname+"/public/donut9.html")
});
app.get("/donut10",function (req,res) {
    res.sendFile(__dirname+"/public/donut10.html")
});
app.get("/donut11",function (req,res) {
    res.sendFile(__dirname+"/public/donut11.html")
});
app.get("/donut12",function (req,res) {
    res.sendFile(__dirname+"/public/donut12.html")
});
app.get("/donut13",function (req,res) {
    res.sendFile(__dirname+"/public/donut13.html")
});
app.get("/donut14",function (req,res) {
    res.sendFile(__dirname+"/public/donut14.html")
});
app.get("/donut15",function (req,res) {
    res.sendFile(__dirname+"/public/donut15.html")
});
app.get("/donut16",function (req,res) {
    res.sendFile(__dirname+"/public/donut16.html")
});
app.get("/donut17",function (req,res) {
    res.sendFile(__dirname+"/public/donut17.html")
});
app.get("/donut18",function (req,res) {
    res.sendFile(__dirname+"/public/donut18.html")
});
app.get("/donut19",function (req,res) {
    res.sendFile(__dirname+"/public/donut19.html")
});
app.get("/donut20",function (req,res) {
    res.sendFile(__dirname+"/public/donut20.html")
});


// ------------CHI TRANG ----------------//
app.get("/videosss",function (req,res) {
    res.sendFile(__dirname+"/public/videosss.html")
});
app.get("/videoss1",function (req,res) {
    res.sendFile(__dirname+"/public/videoss1.html")
});
app.get("/videoss2",function (req,res) {
    res.sendFile(__dirname+"/public/videoss2.html")
});
app.get("/videoss3",function (req,res) {
    res.sendFile(__dirname+"/public/videoss3.html")
});
app.get("/video1",function (req,res) {
    res.sendFile(__dirname+"/public/video1.html")
});
app.get("/video2",function (req,res) {
    res.sendFile(__dirname+"/public/video2.html")
});
app.get("/video3",function (req,res) {
    res.sendFile(__dirname+"/public/video3.html")
});
app.get("/video4",function (req,res) {
    res.sendFile(__dirname+"/public/video4.html")
});
app.get("/video5",function (req,res) {
    res.sendFile(__dirname+"/public/video5.html")
});
app.get("/video6",function (req,res) {
    res.sendFile(__dirname+"/public/video6.html")
});
app.get("/video7",function (req,res) {
    res.sendFile(__dirname+"/public/video7.html")
});
app.get("/video8",function (req,res) {
    res.sendFile(__dirname+"/public/video8.html")
});
app.get("/video9",function (req,res) {
    res.sendFile(__dirname+"/public/video9.html")
});
app.get("/video10",function (req,res) {
    res.sendFile(__dirname+"/public/video10.html")
});
app.get("/baking",function (req,res) {
    res.sendFile(__dirname+"/public/baking and pa.html")
});
app.get("/form",function (req,res) {
    res.sendFile(__dirname+"/public/form.html")
});
//--------------PHUONG------------//
app.get("/news",function (req,res) {
    res.sendFile(__dirname+"/public/NEWS.html")
});
app.get("/aboutcompany",function (req,res) {
    res.sendFile(__dirname+"/public/Aboutcompany.html")
});
app.get("/litternews1",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon1.html")
});
app.get("/litternews2",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon2.html")
});
app.get("/litternews3",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon3.html")
});
app.get("/litternews4",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon4.html")
});
app.get("/litternews5",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon5.html")
});
app.get("/litternews6",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon6.html")
});
app.get("/litternews7",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon7.html")
});
app.get("/litternews8",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon8.html")
});
app.get("/litternews9",function (req,res) {
    res.sendFile(__dirname+"/public/trangcon9.html")

});


