var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to The Test by Indu P Chaube' });
  //res.sendFile(path.join(__dirname + 'index_main.html'));
});

module.exports = router;
