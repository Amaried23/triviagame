
var panel = $("#quiz-area");

// Question set
var questions = [{
	question: "Halloween H20 features a cast member from Psycho. Who is it?",
	answers: [" Anthony Perkins","Jamie Lee Curtis", "Norman Bates", "Janet Leigh"],
	correctAnswer: "Janet Leigh"
}, {
	question: "What is Michael Myers middle name?",
	answers: ["Audrey", "William","Anthony", "Thomas"],
	correctAnswer: "Audrey"
}, {
	question: "In the Friday the 13th films, which state houses the Camp Crystal Lake?",
	answers: ["New Mexico", "New Hampshire", "New England", "New Jersey"],
	correctAnswer: "New Jersey"
}, {
	question: "Which of the following slashers has accumulated the highest body count?",
	answers: ["Freddy Krueger", "Michael Myers", "Jason Voorhees", "Leatherface"],
	correctAnswer: "Jason Voorhees"
}, {
	question: " Who was the killer in the original Friday the 13th movie?",
	answers: ["Jason Voorhees", "Alice", "Mrs. Voorhees", "Jason's Dad"],
	correctAnswer: "Mrs. Voorhees"
}, {
	question: "Which horror legend survives in Freddy vs. Jason ?",
	answers: ["Freddy", "Jason", "Both", "Neither"],
	correctAnswer: "Both"
}, {
	question: "In the Childs Play movies, what is the name of the boy that the killer repeatedly attempts to possess?",
	answers: ["Andrew", "Andy", "Charle", "Robbie"],
	correctAnswer: "Andy"
}, {
	question: "What year was the first Nightmare on Elm Street movie released?",
	answers: ["1985", "1982", "1987", "1984"],
	correctAnswer: "1984"
}, {
	question: "In Child's Play what is Chucky's real name?",
	answers: ["Charles Lee Ray", "Charles Lee Roy", "Charles Chuckster Rayson", "Charles Leroy"],
	correctAnswer: "Charles Lee Ray"
}, {
	question:" Who plays Freddy Krueger in the original Nightmare on Elms Street movies?",
	answers: ["Kurl Russell", "Brian Yuzna", "Keith Davids", "Robert England"],
	correctAnswer: "Robert England"

}];

// Variable that will hold the setInterval

var timer;

// amount of correct and incorrect start at zero. Counter starts at 120 seconds
var game = {

	correct: 0,
	incorrect: 0,
	counter: 120,

	countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
