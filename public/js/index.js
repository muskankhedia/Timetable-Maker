/** $('#search').on('click',function() {
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
**/  




$('#stream_select').on('change',function() {
  var stream = $(this).val();
  $.ajax({
    method : 'GET',
    url : '/api/'+stream+'/getsem',
    dataType: 'json',
    success : function(data){
      var $el = $("#sem_select");
                    $el.empty(); // remove old options
                    $el.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
                    $.each(data, function(value, key) {
                        $el.append($("<option></option>")
                                .text(key.SEM));
                    });                           
      
    }
  })
})

$('#sem_select').on('change',function() {
    var sem = $(this).val();
    $.ajax({
      method : 'GET',
      url : '/api/'+stream+'/'+sem+'/getbranch',
      dataType: 'json',
      success : function(data){
        var $el = $("#branch_select");
                      $el.empty(); // remove old options
                      $el.append($("<option></option>")
                              .attr("value", '').text('Please Select'));
                      $.each(data, function(value, key) {
                          $el.append($("<option></option>")
                                  .text(key.BRANCH));
                      });                           
        
      }
    })
  })

$('#branch_select').on('change',function() {
    var stream = $('#stream_select').val();
    console.log(stream);
    var sem = $('#sem_select').val();
    console.log(sem);
    var branch = $('#branch_select').val();
    console.log(branch);
    var subject = $(this).val();
    console.log(subject);
    $.ajax({
      method : 'GET',
      url : '/api/'+stream+'/'+sem+'/'+branch+'/getsubj',
      dataType: 'json',
      success : function(data){
        var $el = $("#subject_select");
                      $el.empty(); // remove old options
                      $el.append($("<option></option>")
                              .attr("value", '').text('Please Select'));
                      $.each(data, function(value, key) {
                          $el.append($("<option></option>")
                                  .attr("value",key.Sub_Code).text(key.Subject));
                      });                          
      }
    })
  })


$('#subject_select').on('change',function() {
  var stream = $('#stream_select').val();
  console.log(sem);
  var sem = $('#sem_select').val();
  console.log(sem);
  var branch = $('#branch_select').val();
  console.log(branch);
  var subject = $('#subject_select').val();
  console.log(branch);
  var section = $(this).val();
  console.log(section);
  
  $.ajax({
    method : 'GET',
    url : '/api/'+stream+'/'+sem+'/'+branch+'/'+subject+'/getsection',
    dataType: 'json',
    success : function(data){
      var $el = $("#section_select");
                    $el.empty(); // remove old options
                    $el.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
                    $.each(data, function(value, key) {
                        $el.append($("<option></option>")
                                .text(key.SECTION));
                    });                          
    }
  })
})

$('#section_select').on('change',function() {
    var stream = $('#stream_select').val();
    console.log(sem);
    var sem = $('#sem_select').val();
    console.log(sem);
    var branch = $('#branch_select').val();
    console.log(branch);
    var subject = $('#subject_select').val();
    console.log(branch);
    var subject = $('#section_select').val();
    console.log(branch);
    var group = $(this).val();
    console.log(group);
    
    $.ajax({
      method : 'GET',
      url : '/api/'+stream+'/'+sem+'/'+branch+'/'+subject+'/'+section+'/getgroup',
      dataType: 'json',
      success : function(data){
        var $el = $("#group_select");
                      $el.empty(); // remove old options
                      $el.append($("<option></option>")
                              .attr("value", '').text('Please Select'));
                      $.each(data, function(value, key) {
                          $el.append($("<option></option>")
                                  .text(key.GROUP));
                      });                          
      }
    })
  })



// $('#searchbtn').on('click',function() {
//       var sem = $('#sem_select').val();
//       console.log(sem);
//       var branch = $('#branch_select').val();
//       console.log(branch);
//       var subject = $('#subject_select').val();
//       console.log(subject);
//       location.href = '/result/'+sem+'/'+branch+'/'+subject;
// })


/**$('.markbox').on('change',function() {
  var redgno = $(this).data('reg');
  var mark = $(this).val();
  console.log(mark);
  console.log(redgno);
  $.ajax({
    method : 'GET',
    url : '/result/'+redgno+'/'+mark,
    success : function(data){
      console.log(data);                          
    }
  })
}) **/

























