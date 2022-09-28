var express = require('express')
var app = express()
var users = require('./routes/users')

app.use('/users',users)

app.get("*",(req,res)=>{
    res.send('404 NOT FOUND')
})
app.listen(3000)

