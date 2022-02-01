// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");

  let userGreeting = "Hello there, ";

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);
  });
});