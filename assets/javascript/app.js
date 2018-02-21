$(document).ready( function ( ) {

// questions array
var questions = [
   question1 = {
    question : "What is Albus Dumbledore's full name?",
    A : "<button class='correct'>Albus Percival Wulfric Brian Dumbledore</button>",
    B : "<button class='incorrect'>Albus Patrick William Bob Dumbledore</button>",
    C : "<button class='incorrect'>Albus Brian Percival Wulfric Dumbledore</button>",
    D : "<button class='incorrect'>Albus William Bob Patrick Dumbledore</button>",
    gif : "<img src='./assets/images/dumbledore.gif'>",
  },
  
  question2 = {
    question : "Which two characters share a Patronus?",
    A : "<button class='incorrect'>Ron Weasley and Neville Longbottom</button>",
    B : "<button class='incorrect'>Harry Potter and James Potter</button>",
    C : "<button class='correct'>Severus Snape and Lily Potter</button>",
    D : "<button class='incorrect'>Dean Thomas and Ginny Weasley</button>",
    gif : "<img src='./assets/images/patronus.gif'>",
  },
  
  question3 = {
    question : "When Harry and Ron visit the Slytherin common room in disguise in The Chamber of Secrets, what is the password used to get inside?",
    A : "<button class='incorrect'>Salazar</button>",
    B : "<button class='correct'>Pure-blood</button>",
    C : "<button class='incorrect'>Parselmouth</button>",
    D : "<button class='incorrect'>Draco dormiens nunquam titillandus</button>",
    gif : "<img src='./assets/images/polyjuice.gif'>",
  },
  
  question4 = {
    question : "James Potter, Sirius Black, and Peter Pettigrew are the only known unregistered Animagi - until who comes along?",
    A : "<button class='incorrect'>Aberforth Dumbledore</button>",
    B : "<button class='correct'>Rita Skeeter</button>",
    C : "<button class='incorrect'>Nymphadora Tonks</button>",
    D : "<button class='incorrect'>Ludo Bagman</button>",
    gif : "<img src='./assets/images/rita-skeeter.gif'>",
  },

  question5 = {
    question : "In The Prisoner of Azkaban, which secret passage out of Hogwarts leads Harry to the cellar of Honeydukes?",
    A : "<button class='correct'>Behind the statue of the one-eyed witch</button>",
    B : "<button class='incorrect'>Behind the statue of Gregory the Smarmy</button>",
    C : "<button class='incorrect'>Inside the Vanishing Cabinet</button>",
    D : "<button class='incorrect'>Beneath the Whomping Willow</button>",
    gif : "<img src='./assets/images/map.gif'>",
  },

  question6 = {
    question : "In The Deathly Hallows, what are the names of the three Peverell brothers?",
    A : "<button class='correct'>Antioch, Cadmus, and Ignotus</button>",
    B : "<button class='incorrect'>Antioch, Crydia, and Ignatius</button>",
    C : "<button class='incorrect'>Aberforth, Cadmus, and Ignotus</button>",
    D : "<button class='incorrect'>Antioch, Cadmus, and Ibrahim</button>",
    gif : "<img src='./assets/images/deathly-hallows.gif'>",
  },
]

var questionNum = -1
var questionsCorrect = 0
var questionsIncorrect = 0
var clock = 30
var unanswered = 6

// load page and begin game
function gameStart( ) {
  $(".question").html("Test your Harry Potter knowledge!")
  $(".answer-choices").html("<button type='button' class='btn btn-secondary btn-lg begin'>Begin</button>")
}
gameStart ( )

$(".begin").on("click", function ( ) {
  $(".begin").hide()
  $(".begin").off()
  // display timer
  var timer = setInterval(function ( ) {
    $(".timer").html("Time Remaining: "+clock+" seconds")
    if( clock > 0 ) {
      clock--;
    }
    if( clock === 0 ) {
      $(".question").empty( )
      $(".answer-choices").html("<h3>Time's Up!</h3><h4>Correct Answers: "+questionsCorrect+"</h4><h4>Incorrect Answers: "+questionsIncorrect+"</h4><h4>Unanswered Questions: "+unanswered+"</h4><p><button type='button' class='btn btn-secondary btn-lg begin'>Try Again</button><p>")
    }
  }, 1000)
  gamePlay( )

  // game play
  function gamePlay( ) {
    questionNum++
    $(".question").html(questions[questionNum].question)
    $(".answer-choices").append("<p>"+questions[questionNum].A+"</p>")
    $(".answer-choices").append("<p>"+questions[questionNum].B+"</p>")
    $(".answer-choices").append("<p>"+questions[questionNum].C+"</p>")
    $(".answer-choices").append("<p>"+questions[questionNum].D+"</p>")
    $(".correct").on("click", function ( ){
      unanswered--
      questionsCorrect++
      $(".question").html("Correct!")
      $(".answer-choices").html(questions[questionNum].gif)
      var wait = setTimeout( function( ){
        $(".answer-choices").empty( )
        if(questionNum === questions.length-1) {
          $(".question").empty( )
          $(".answer-choices").html("<h3>End of Game</h3><h4>Correct Answers: "+questionsCorrect+"</h4><h4>Incorrect Answers: "+questionsIncorrect+"</h4><p><button type='button' class='btn btn-secondary btn-lg begin'>Try Again</button><p>")
        }
        else {
          gamePlay( )
        }
      }, 4000)
    })
    $(".incorrect").on("click", function ( ){
      unanswered--
      questionsIncorrect++
      $(".question").html("Incorrect. The correct answer is: "+$(".correct").text( )+"")
      $(".answer-choices").html(questions[questionNum].gif)
      var wait = setTimeout( function( ){
        $(".answer-choices").empty( )
        if(questionNum === questions.length-1) {
          $(".question").empty( )
          $(".answer-choices").html("<h3>End of Game</h3><h4>Correct Answers: "+questionsCorrect+"</h4><h4>Incorrect Answers: "+questionsIncorrect+"</h4><p><button type='button' class='btn btn-secondary btn-lg begin'>Try Again</button><p>")
        }
        else {
          gamePlay( )
        }
      }, 4000)
    })
    
  }
})
})