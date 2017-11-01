var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'baobei'
})

/* GET home page. */
router.post('/', function(req, res, next) {
	var str=req.body.id;
	console.log(str)
  	res.header('Access-Control-Allow-Origin','*');
	pool.query(`SELECT * FROM sousuo WHERE name LIKE '%${str}%' OR detail LIKE '%${str}%'`,function(err,rows){
	  	res.send(rows);
		console.log(rows)
	  	
	  })
})

module.exports = router;
