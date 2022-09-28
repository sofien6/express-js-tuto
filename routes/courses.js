var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send(' all courses ')
  });

router.get('/courses',(req,res)=>{
    let courseTitle = 'welcome in ' + req.query.course + ' course with dz brain ' 
    res.render('index',{ title: courseTitle , subtitle: 'react course with dzbrain'})
 })


 module.exports = router