const drinks= require('./models/drinks.js')
const express=require("express");
const { response } = require('express');
const app= express()

app.get('/', (request, response)=>{
    response.send("welcome to the Gitpub App")
});
app.get('/drinks',(request, response)=>{
    response.render("drinks_index.ejs", {drinks:drinks})
});

app.listen(3000, ()=> {
console.log("The server is running...")
});