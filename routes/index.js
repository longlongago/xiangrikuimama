var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.cookie.openid.length > 0) {
		res.render('happy',{title:'xiangrikuimama', openId:req.cookie.openid});
	}else{ 
  	res.render('index', { title: 'xiangrikuimama', domain:'www.xiangrikuimama.com'});
  }
});

module.exports = router;
