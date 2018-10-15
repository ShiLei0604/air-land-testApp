var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express on Azure' });
});

router.get('/test', function(req, res){
  res.json({
    'msg':'add config, async, nodemon'
  })
})
module.exports = router;
