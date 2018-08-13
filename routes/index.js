var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

module.exports = router;


