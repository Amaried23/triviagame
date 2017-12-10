
//below is the counter function


var counter = 120;
var timerCountdown = setInterval(function(){
  
  counter--

  $("#timer").html("<h2>" + counter + " seconds remaining</h2>");
  if (counter === 0) {
    
    clearInterval(timerCountdown);
  }
}, 1000);



$( document ).ready(function(){

//making var for the score tally

	var correct = 0;
	var incorrect = 0;

// below its stating on click of one of the multiple choice answers if the answer is the correct answer add 1 to the tally, if not add 1 to the incorrect tally. 

$("#mc").on ('click', function(){
	var question1 = document.quiz.question1.value;

	if (question1 == "Janet Leigh") {
		correct++;

		
}
	else  {
		incorrect++
	}
});

$("#mc").on ('click', function(){
	var question2 = document.quiz.question2.value;

	if (question2 == "Audrey") {
		correct++;

	
}
	else  {
		incorrect++
	}
});

$("#mc").on ('click', function(){
	var question3 = document.quiz.question3.value;

	if (question3 == "New Jersey") {
		correct++;
}
	else  {
		incorrect++
	}
});

$("#mc").on ('click', function(){
	var question4 = document.quiz.question4.value;

	if (question4 == "Jason Voorhees") {
		correct++;
}
	else  {
		incorrect++
	}
});

$("#mc").on ('click', function(){
	var question5 = document.quiz.question5.value;

	if (question5 == "Mrs. Voorhees") {
		correct++;
}
	else  {
		incorrect++
	}
});

$("#mc").on ('click', function(){
	var question6 = document.quiz.question6.value;

	if (question6 == "Both") {
		correct++;
}
	else  {
		incorrect++
	}
});

$("#mc").on ('click', function(){
	var question7 = document.quiz.question7.value;

	if (question7 == "Andy") {
		correct++;
}
	else  {
		incorrect++
	}
});	

$("#mc").on ('click', function(){
	var question8 = document.quiz.question8.value;

	if (question8 == "1984") {
		correct++;
}
	else  {
		incorrect++
	}
});	

$("#mc").on ('click', function(){
	var question9 = document.quiz.question9.value;

	if (question9 == "Charles Lee Ray") {
		correct++;
}
	else  {
		incorrect++
	}
});	

$("#mc").on ('click', function(){
	var question10 = document.quiz.question10.value;

	if (question10 == "Robert Englund") {
		correct++;
}
	else  {
		incorrect++
	}
});

$("sub").submit(function(){
        // when form is clicked it submits and here should be code that displays on the page how many you got correct and incorrect

    });

});