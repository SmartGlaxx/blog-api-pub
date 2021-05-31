const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const allRoutes = require('./routes/posts')
const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://glaxx:'+ process.env.MY_PASSWORD +'@shop-api1.fgv5d.mongodb.net/blog-api?retryWrites=true&w=majority?authSourse=yourDB&w=1', 
{useUnifiedTopology : true, useNewUrlParser : true, useCreateIndex : true})

app.use('/', allRoutes)

module.exports = app
