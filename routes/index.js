var express = require('express');
var router = express.Router();

var path = require("path");

var database = require('../database.js');

/* GET home page. */


// router.get('/api/:sem/getbranch', function(req,res){
// 	var query = 'SELECT BRANCH FROM '+database.tablename+' WHERE Sem = "'+req.params.sem+'" GROUP BY BRANCH;';
// 	//console.log(query)n
// 	database.connection.query(query, function(error,results,fields) {
// 		if(error){
// 			console.log(error);
// 		}else{
// 			res.send(results);
// 		}
// 	});
// });
router.get('/api',function(req,res){
    database.connection.query('SELECT DISTINCT STREAM FROM '+database.tablename+' ORDER BY STREAM ASC;', function(error,results,fields) {
	    var streams = results;
	    database.connection.query('SELECT DISTINCT SEM FROM '+database.tablename+' ORDER BY SEM ASC;', function(error,results,fields) {
		    var sems = results;
		    database.connection.query('SELECT DISTINCT BRANCH FROM '+database.tablename+' ORDER BY BRANCH ASC;', function(error,results,fields) {
			    var branches = results;
				database.connection.query('SELECT DISTINCT Subject FROM '+database.tablename+' ORDER BY Subject ASC;', function(error,results,fields) {
					var subjects = results;
					console.log(subjects)
			    res.render('index',{'streams' : streams, 'sems' : sems, 'branches' : branches, 'subjects' : subjects});
		});
	});
});
});

router.get('/api/:stream/getsem', function(req,res){
	var query = 'SELECT SEM FROM '+ database.tablename+' WHERE STREAM = "'+req.params.stream+'" GROUP BY SEM;';
	//console.log(query)n
	database.connection.query(query, function(error,results,fields) {
		if(error){
			console.log(error);
		}else{
			res.send(results);
		}
	});
});

router.get('/api/:stream/:sem/getbranch', function(req,res){
	var query = 'SELECT BRANCH FROM '+ database.tablename+' WHERE SEM = "'+req.params.sem+'" AND STREAM =" '+req.params.stream+'" GROUP BY BRANCH;';
	//console.log(query)n
	database.connection.query(query, function(error,results,fields) {
		if(error){
			console.log(error);
		}else{
			res.send(results);
		}
	});
});

router.get('/api/:stream/:sem/:branch/getsubj', function(req,res){
	var query = "Select Subject,Sub_Code FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branch+"' AND SEM = '"+req.params.sem+"' AND STREAM = '"+req.params.stream+"'GROUP BY Subject,Sub_Code;";
	//console.log(query)
	database.connection.query(query, function(error,results,fields) {
		if(error){
			console.log(error);
		}else{
			//console.log(results);
		res.send(results);
		}
	});
});

	
module.exports = router;


