$(document).ready( function ( ) {

// question objects
var  question1 = {
  question : "What is Albus Dumbledore's full name?",
  rightAns : "What is Albus Dumbledore's full name?",
  answer1 : "Albus Patrick William Bob Dumbledore",
  answer2 : "Albus Brian Percival Wulfric Dumbledore",
  answer3 : "Albus William Bob Patrick Dumbledore",
}

// load page and begin game
function gameStart( ) {
  $(".question").html("Test your Harry Potter knowledge!")
  $(".answer-choices").html("<button type='button' class='btn btn-secondary btn-lg begin'>Begin</button>")
}
gameStart ( )

$(".begin").on("click", function ( ) {
  $(".question").html(question1.question)
  $(".answer-choices").append("<p>"+question1.rightAns+"</p>")
  $(".answer-choices").append("<p>"+question1.answer1+"</p>")
  $(".answer-choices").append("<p>"+question1.answer2+"</p>")
  $(".answer-choices").append("<p>"+question1.answer3+"</p>")
  $(".begin").hide()
  $(".begin").off()
})

// display timer question answer choices
// clickable answer choices
  // if correct congratulate them and show gif
  // if incorrect tell them the correct answer and show gif


})