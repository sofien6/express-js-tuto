var express = require('express')
var router = express.Router()

// add midleware 
router.use('/',(req,res,next)=>{
    console.log(' midelwar called');
    console.log('%s %s', req.method, req.url);  
    next()
})

// display usersList then go to the end of the midleware
router.get("/",(req,res,next)=>{
    var user = {
        id : "A58DD",
        name : 'Sofien',
        familyName : 'Hedjazi',
        university : 'USTO',
        youtube : 'DZBRAIN',
    }
    res.send(user)
    // next this step u need to end the midleware
    next()
})

router.use('/',(req,res)=>{
    console.log(' midelware ended');
    
})

router.get("/all-users/:id([0-9]{4})",(req,res)=>{
  var user = " Lists of all users " + req.params.id
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