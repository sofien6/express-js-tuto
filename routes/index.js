var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Dzbrain Course' , subtitle: 'you are the best audience i love you all' });
});


module.exports = router;
