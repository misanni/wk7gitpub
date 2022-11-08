const drinks= require('./models/drinks.js')
const food=require('./models/food.js')
const express=require("express");
const { response } = require('express');
const app= express()

app.get('/', (request, response)=>{
    response.send("welcome to the Gitpub App")
});
//----------//
app.get('/food',(request, response)=>{
    response.render("food_index.ejs", {allfood:food})
});
app.get('/food/:id', (request, response)=>{
    response.render("food_show.ejs",{foodname : food[request.params.id].name, foodimage:food[request.params.id].image, foodprice:food[request.params.id].price })
})
//)))))))))))))))))))))))-------------------(((((((((((((())))))))))))))
app.get('/drinks',(request, response)=>{
    response.render("drinks_index.ejs", {alldrinks:drinks})
});
app.get('/drinks/:id', (request, response)=>{
    response.render("drinks_show.ejs",{drinkname : drinks[request.params.id].name, drinkimage:drinks[request.params.id].image, drinkprice:drinks[request.params.id].price })
})
//////////////////////////////////////////////////////////////////////////
app.listen(3000, ()=> {
console.log("The server is running...")
});