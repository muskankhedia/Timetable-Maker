	var express = require('express');
	var router = express.Router();

	/* GET users listing. */
	router.post('/', function(req, res, next) {
	  console.log("got POST request");
	  console.log(req.body.stream);
	  console.log(req.body.branch);
	  console.log(req.body.sem);
	  console.log(req.body.section);
	  console.log(req.body.group);
	  // keep above parameters as variables

	  //s = "Select * FROM "+sem+" WHERE BRANCH = '" +req.params.branch+"' AND stream = '"+req.params.stream and so on

	  // database.connection.query(s,function(error,results,fields){
	  //   if(error){
	  //     console.log("Error found");
	  //   }else{
	  //     res.render('result',{results:results, branch:req.body.branch_select, subject:req.body.subject_select});
	  //   }
	  //    //
	  // });
	});

	module.exports = router;
