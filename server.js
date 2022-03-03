const express = require('express')
const quotes = require('./quotes.json')
app = express()

app.use(express.json())
const list = quotes
app.get('/',(req,res)=>{
    console.log("got get request")

    res.json(list["quotes"][Math.ceil(Math.random()*66)])
})


app.listen(3000,()=>{
    console.log("server is running 🎇")
})