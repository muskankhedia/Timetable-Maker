var subjectlist = {
"BTECH":{
    "CSE": {
        "8th Semester": ["HSSM3402 -ENVIRONMENTAL ENGINEERING","PEEC5418 - SATELITE COMMUNICATION SYSTEMS"],
        "7th Semester": ["HSSM3402 -ENVIRONMENTAL ENGINEERING","PEEC5418 - SATELITE COMMUNICATION SYSTEMS"]
    },
    "EE": {
        "8th Semester": ["HSSM3402 -ENVIRONMENTAL ENGINEERING","PEEC5418 - SATELITE COMMUNICATION SYSTEMS"],
        "7th Semester": ["HSSM3402 -ENVIRONMENTAL ENGINEERING","PEEC5418 - SATELITE COMMUNICATION SYSTEMS"]
    }
},
"BARCH":{
    "BARCH":{
        "8th Semester": ["EAR853 - BARRIER FREE ENVIRONMENT","EAR843 - URBAN DESIGN"],
        "6th Semester": ["AR633 - LANDSCAPE DESIGN","AR642 - ESTIMATION AND VALUATION"]
    }
},
"BPLAN":{
    "BPLAN":{
        "6TH Semester": ["15BPLN601 - REGIONAL PLANNING","15BPLN602 - PUBLIC FINANCE"]
    }
},
"MPLAN":{
    "MPLAN":{
        "4TH Semester": ["15MPPE403C - DISASTER MANAGMENT","15MPPE403B - CITY AND METROPOLITAN PLANNING"]
    }
}
};

$.each(subjectlist, function(key, value){
    $.each(value, function(key, value){
        console.log(key);
        $('#stream').append($('<option>', { 
        value: key,
        text : key,
    }));
    });
});

$('#search').on('click',function() {
  // var sem = $(this).val();
  // $.ajax({
  //   method : 'POST',
  //   url : '/api/'+sem+'/getbranch',
  //   dataType: 'json',
  //   success : function(data){
  //     var $el = $("#branch");
  //                   $el.empty(); // remove old options
  //                   $el.append($("<option></option>")
  //                           .attr("value", '').text('Please Select'));
  //                   $.each(data, function(value, key) {
  //                       $el.append($("<option></option>")
  //                               .text(key.BRANCH));
  //                   });                           
      
  //   }
  // })
  console.log("i am here")
});
