var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res, next) {
  res.render('index', { useAchievements: false });
});

router.get('/b', function(req, res, next) {
  res.render('index', { useAchievements: true });
});

module.exports = router;
