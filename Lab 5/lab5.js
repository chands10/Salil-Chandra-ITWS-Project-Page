/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements
  
  var alertString = "";
  //validation for first name field
  var first = 0;
  if (formObj.firstName.value == "") {
    alertString += "You must enter a first name\n";
    first += 1;
  }
    
  //validation for last name field  
  var last = 0;
  if (formObj.lastName.value == "") {
    alertString += "You must enter a last name\n";
    last += 1;
  }
    
  //validation for title field 
  var title = 0;
  if (formObj.title.value == "") {
    alertString += "You must enter a title\n";
    title += 1;
  }
    
  //validation for first name field   
  var org = 0;
  if (formObj.org.value == "") {
    alertString += "You must enter an organization\n";
    org += 1;
  }
    
  //validation for nickname field
  var pseudonym = 0;
  if (formObj.pseudonym.value == "") {
    alertString += "You must enter a nickname\n";
    pseudonym += 1;
  }
    
  //validation for comments field
  var comments = 0;
  if (formObj.comments.value == "" || formObj.comments.value == "Please enter your comments") {
    alertString += "You must enter a comment";
    comments += 1;
  }
  
  //alert message
  if ((first + last + title + org + pseudonym + comments) > 0) {
    alert(alertString);
    //focuses on the first field missing
    if (first == 1) {
      formObj.firstName.focus();
    } else if (last == 1) {
      formObj.lastName.focus();
    } else if (title == 1) {
      formObj.title.focus();
    } else if (org == 1) {
      formObj.org.focus();
    } else if (pseudonym == 1) {
      formObj.pseudonym.focus();
    } else {
      formObj.comments.focus();
    }
      
    return false;
  } else {
    //success
    alert("Success!");
    return true;
  }
}

//removes "Please enter your comments" on focus
function remove() {
  var comment = document.getElementById("comments");
    if (comment.innerHTML == "Please enter your comments") {
      comment.innerHTML = "";
    }
}

//adds "Please enter your comments" on blur
function add() {
  var comment = document.getElementById("comments");
    if (comment.innerHTML == "") {
      comment.innerHTML = "Please enter your comments";
    }
}