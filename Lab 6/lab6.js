/* Lab 6 JavaScript File  */

// this is the block that allows code to execute only after the DOM
// is fully loaded:
$(document).ready(function() {

  // example event handler:
  $("#lab6Button").click(function() {
    alert("You've clicked the lab 6 button");
  });

  // Problem 1: When the user clicks on the <h1>(your name),
  //make an alert appear and
  //change the text to be your name in small caps
  $("h1").click(function() {
    alert("You're changing my name");
    $("h1 em").html("Salil Chandra").css("font-variant", "small-caps");
  });




  // Problem 2: Make the "lorem ipsum" paragraphs vanish when a user clicks
  // "Hide text"; make it appear when a user clicks "Show text":
  $("#hideText").click(function() {
    $("#showHideBlock p").hide();
  });
    
  $("#showText").click(function() {
    $("#showHideBlock p").show();
  });



  // Problem 3: When a normal list item is clicked, make it turn red using addClass.
  //            When a red list item is clicked change it back
  // (Note that there is a css style named ".red" in lab6.css.)
  $("#lab6List li").click(function() {
    if ($(this).hasClass("red")) {
      $(this).removeClass("red");
    } else {
      $(this).addClass("red");
    }
  });



  // Problem 4: lookup jquery toggle() and use this code on the "Toggle Text"
  // link to show/hide the text:
  $("#toggleText").click(function() {
      $("#showHideBlock p").toggle();
  });



  /* When you are done:
     Post this lab to your iit website,
     link it from your projects page,
     and put a *working* hyperlink to your projects
     page in the readme file.
 */
});
