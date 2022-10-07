const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");

const port=process.env.PORT||3000;



const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");
console.log(template_path);
console.log(partialPath);

// console.log("path",staticPath);
app.set("view engine","hbs");
app.set("views",template_path);
 app.use(express.static(staticPath));
 hbs.registerPartials(partialPath);

 



app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        msgError:"OOPS Page not Found"
    });
})

app.listen(port,()=>{
    console.log(`listening at ${port} anmol hello`);
});