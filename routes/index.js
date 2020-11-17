var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { bmi: 0, userdata: {height: 0, weight: 0}});
});

router.post('/', function(req, res, next){
  let height = req.body.height;
  let weight = req.body.weight;
  const bmi = weight/ ((height/100.0) * (height/100.0));
  if(bmi > 28){
    var msg = "胖";
  }else{
    var msg = "瘦";
  }
  res.render('index', { bmi: bmi, userdata: {height: height, weight: weight, msg: msg}});
});

router.get('/temptest', function(req, res, next){
  res.render('temptest');
});

router.get('/temptest2', function(req, res, next){
  res.render('temptest2');
});

router.get('/temptest3', function(req, res, next){
  res.render('temptest3');
});
module.exports = router;
