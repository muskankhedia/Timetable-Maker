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




	
	router.post('/',function(req,res,next){
		console.log("got POST request");
		console.log(req.body.stream_select);
		console.log(req.body.sem_select);
		console.log(req.body.branch_select);
		console.log(req.body.subject_select);
		var s = "Select * FROM "+database.tablename+" WHERE "
		if(req.body.stream_select){
		s = s+"STREAM = '" +req.body.stream_select+"' AND "
	  }
	  if(req.body.sem_select){
		s = s+"SEM = '" +req.body.sem_select+"' AND "
	  }
	  if(req.body.branch_select){
		s = s+"BRANCH = '" +req.body.branch_select+"' AND "
	  }
	  if(req.body.subject_select){
		s = s+"subject = '" +req.body.subject_select + "' AND'"
	  }
	  //s = s .slice(-3);
	  s = s.slice(0, -6 );
	  s = s + ';'
	  console.log(s);
	  database.connection.query(s,function(error,results,fields){
		if(error){
		  console.log("Error found");
		}else{
		  res.render('result',{results:results,sem:req.body.sem_select, branch:req.body.branch_select, subject:req.body.subject_select});
		}
		 //
	  });
	});;
	 
	
	
	




	module.exports = router;
