$(document).ready(function() {

  $.ajax({
    type: "GET",
   	url: "projectsList.json",
   	dataType: "json",
   	success: function(responseData, status){
   	  var output = "";  
      var prevName = "";
    $.each(responseData.menuItem, function(i, item) {
      if (item.menuName != prevName) {  //if there is more than one link per lab do not copy down the lab name more than once
        output += item.menuName + ':<br/>';
        }
      output += '<a href="' + item.menuURL + '">';
      output += item.menuDesc + '</a><br/>';
      prevName = item.menuName;
    });
    $('#projects').html(output);
    
    $( function() {
      $( "#projects input[type=submit], #projects a, #projects button" ).button(); //make each link a button (jQuery UI)
  } ); 
    }, error: function(msg) {
      				// there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
      } 
  }); 
});