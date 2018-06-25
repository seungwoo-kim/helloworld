var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keyboard', (req, res)=> {
  res.json(222);
});

module.exports = router;
