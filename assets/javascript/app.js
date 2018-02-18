$(document).ready( function ( ) {

// questions array
var questions = [
   question1 = {
    question : "What is Albus Dumbledore's full name?",
    rightAns : "What is Albus Dumbledore's full name?",
    answer1 : "Albus Patrick William Bob Dumbledore",
    answer2 : "Albus Brian Percival Wulfric Dumbledore",
    answer3 : "Albus William Bob Patrick Dumbledore",
    gif : "<img src='./assets/images/dumbledore.gif'>",
  },
  
  question2 = {
    question : "Which two characters share a Patronus?",
    answer1 : "Ron Weasley and Neville Longbottom",
    answer2 : "Harry Potter and James Potter",
    rightAns : "Severus Snape and Lily Potter",
    answer3 : "Dean Thomas and Ginny Weasley",
    gif : "<img src='./assets/images/patronus.gif'>",
  },
  
  question3 = {
    question : "When Harry and Ron visit the Slytherin common room in disguise in The Chamber of Secrets, what is the password used to get inside?",
    answer1 : "Salazar",
    rightAns : "Pure-blood",
    answer2 : "Parselmouth",
    answer3 : "Draco dormiens nunquam titillandus",
    gif : "<img src='./assets/images/polyjuice.gif'>",
  },
  
  question4 = {
    question : "James Potter, Sirius Black, and Peter Pettigrew are the only known unregistered Animagi - until who comes along?",
    answer1 : "Aberforth Dumbledore",
    rightAns : "Rita Skeeter",
    answer2 : "Nymphadora Tonks",
    answer3 : "Ludo Bagman",
    gif : "<img src='./assets/images/rita-skeeter.gif'>",
  },

  question5 = {
    question : "In The Prisoner of Azkaban, which secret passage out of Hogwarts leads Harry to the cellar of Honeydukes?",
    rightAns : "Behind the statue of the one-eyed witch",
    answer1 : "Behind the statue of Gregory the Smarmy",
    answer2 : "Inside the Vanishing Cabinet",
    answer3 : "Beneath the Whomping Willow",
    gif : "<img src='./assets/images/map.gif'>",
  },

  question6 = {
    question : "In The Deathly Hallows, what are the names of the three Peverell brothers?",
    rightAns : "Antioch, Cadmus, and Ignotus",
    answer1 : "Antioch, Crydia, and Ignatius",
    answer2 : "Aberforth, Cadmus, and Ignotus",
    answer3 : "Antioch, Cadmus, and Ibrahim",
    gif : "<img src='./assets/images/deathly-hallows.gif'>",
  },
]

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
  // $(".question").html("Correct!")
  // $(".answer-choices").html("<img src='")
  // if incorrect tell them the correct answer and show gif


})