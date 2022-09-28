var express = require('express')
var router = express.Router()

router.get("/",(req,res)=>{
    var user = {
        id : "A58DD",
        name : 'Sofien',
        familyName : 'Hedjazi',
        university : 'USTO',
        youtube : 'DZBRAIN',
    }
    res.send(user)
})

router.get("/all-users/:id([0-9]{4})",(req,res)=>{
    var user = " List of all users " + req.params.id
    res.send(user)
})

router.post("/new-user",(req,res)=>{
    var user = " create new user "
    res.send(user)
})

router.put("/edit-user",(req,res)=>{
    var user = " update user "
    res.send(user)
})

router.delete("/delete-user",(req,res)=>{
    var user = " delete user "
    res.send(user)
})



module.exports = router