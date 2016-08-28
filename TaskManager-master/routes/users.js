var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name/lists', function(req, res, next) {
  res.send('user/ ' + req.params.name + 'のリスト一覧');
});

router.get('/:name/lists/:listname', function(req, res, next) {
  var list = {};
  list.username = req.params.name;
  list.name = req.params.listname;
  res.send(JSON.stringify(list));
});




module.exports = router;
