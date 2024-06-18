const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const bodyParser = require("body-parser")
const app = express()
const ejs = require("ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")

let list = []
let index2
let matchs = []
let match2 

 

app.get("/welcome", (req, res)=> {
   //  res.send({name:"nonso", school:"SQI", home:"city", goods:"drugs"});
 //   req.body("goodbye")
 console.log(__dirname);
 //  res.sendFile(__dirname + "/index.html")
 res.render("index", {names: "nonso", age: "33", school: "SQI"})
})

app.get("/index", (req, res)=>{
    res.render("index")
})

app.get("/signup", (req, res)=>{
    res.render("signup")
})

app.post("/signup", (req, res) =>{
    console.log(req.body)
    res.send("welcome")
})
app.get("/todo", (req, res)=>{
    res.render("todo",{list})
})
app.post("/todo", (req, res)=>{
    console.log(req.body);
    list.push(req.body)
    res.render("todo", {list})
})
app.post("/delete", (req, res)=>{
    let index = req.body.index
    console.log(index);
    list.splice(index, 1)
    res.redirect("/todo")
})
app.post("/edit", (req, res)=>{
    res.render("edit")
    index2 = req.body.index
    console.log(req.body.oldTitle, req.body.oldNote);
})
app.post("/makeedit", (req, res)=>{
    console.log(index2);
    let body = req.body
    list.splice(index2, 1, body)
    res.redirect("/todo")
})

var pin = Math.floor(Math.random() * 99);

app.get("/love", (req, res)=>{
    res.render("love", {matchs, pin})
    
})

app.post("/love", (req, res)=>{
  //  let P = Math.floor(Math.random() * 99);
  var pin = Math.floor(Math.random() * 99);
    console.log(req.body);
    const pins = pin
    console.log(pins);
    matchs.push(req.body);
    res.render("love", {matchs, pin});
   
})

app.post("/matchedit", (req, res)=>{
    res.render("matchedit")
    match2 = req.body.match
    console.log(req.body.oldYour, req.body.oldHer);
})

app.post("/deleteit", (req, res)=>{
    let index = req.body.index
    console.log(index);
    matchs.splice(index, 1)
    res.redirect("/love")
})

// app.post("/editit", (req, res)=>{
//    console.log(match2);

   
// })

app.post("/makedit", (req, res)=>{
    console.log(match2);
    let body = req.body
    matchs.splice(match2, 1, body)
    res.redirect("/love")
})

app.listen("5000", ()=>{
    console.log("this saver is on fire");
    console.log("app");
})