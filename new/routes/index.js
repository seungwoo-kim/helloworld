var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keyboard', function(req, res, next) {
  const menu = {
    type : 'buttons',
    buttons: ["메뉴1","메뉴2","메뉴3"]
  };
  res.set({
    'content-type':'application/json'
  }).send(JSON.stringify(menu));
});

module.exports = router;
