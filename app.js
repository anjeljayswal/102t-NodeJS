const express = require("express");
const app=express();  //invoke express
// ALTERNATIVE 
// const app = require("express");

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // console.log(req);
    // res.send("Hi, Anjali");
    const name ="Anjali Jayswal";
    // const profession="hII"
    
    res.render("home.ejs",{name:name ,profession:"hii"});

})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/conatct",(Req,res)=>{
    res.res("Contact Page");
})







// at 3030 port our node project run/locate 
app.listen(3030,()=>{
    console.log("Node js project has started at port 3030");
})   //method


// echo "# 102t-NodeJS" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/anjeljayswal/102t-NodeJS.git
// git push -u origin main