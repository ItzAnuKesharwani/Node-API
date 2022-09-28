var express = require('express');
var router = express.Router();
var api = require("../controllers/ApiController");

router.post('/login', function(req, res){
	api.login(req, res);
});

module.exports = router;