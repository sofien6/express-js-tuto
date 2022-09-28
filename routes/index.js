var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Dzbrain Course' , subtitle: 'you are the best audience i love you all' });
});

router.get('/courses',(req,res)=>{
   let courseTitle = 'welcome in ' + req.query.course + ' course ' 
   res.render('index',{ title: courseTitle , subtitle: 'react course with dzbrain'})
})
module.exports = router;
