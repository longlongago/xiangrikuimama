var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var collection = req.db.get('token');
	collection.find({},{},function(e,docs){
        res.send('id:'+docs[0]);
    });
  //res.send('respond with a resource');
});

module.exports = router;
