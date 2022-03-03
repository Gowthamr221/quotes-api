require('dotenv').config()
const express = require('express')

const quotes = require('./quotes.json')
app = express()

app.use(express.json())
const list = quotes
app.get('/',(req,res)=>{
    console.log("got get request")

    res.json(list["quotes"][Math.ceil(Math.random()*66)])
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("server is running 🎇")
})