// ===============================
//	Created by: Jason
// 	Email: jasonkurniadj@yahoo.com
// ===============================

var questionContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('btnSubmit');

function generateQuiz (questions, questionContainer, resultsContainer, submitButton) {
	var lenData = questions.length;

	function showQuestions (questions, questionContainer) {
		var output = [];
		var answers;

		var num = 1;
		for (var i=0; i<lenData; i++){
			answers = [];

			for(letter in questions[i].answers){
				answers.push(
					'<label>'
						+ '<input type="radio" name="question' + i + '" value="' + letter + '"> &nbsp;'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			var num = ("0" + num).slice(-2);
			output.push(
				'<div class="question mt-3">' + num + '. ' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);

			num ++;
		}

		questionContainer.innerHTML = output.join('');
	}
	showQuestions (questions, questionContainer);

	var timeLeft = 119;
	var elem = document.getElementById('timer');
	var timerId = setInterval(countdown, 1000);

	function countdown() {
		var minutes = parseInt(timeLeft / 60) % 60;
		var seconds = timeLeft % 60;
		var result = (minutes < 10 ? "0" + minutes : minutes) + " minute(s) " + (seconds  < 10 ? "0" + seconds : seconds) + " second(s)";

		if (timeLeft == 0) {
			clearTimeout(timerId);
			elem.innerHTML = 'Time out!';
			showResults(questions, questionContainer, resultsContainer);
			// return false;
		} else {
			$('#timer').html(result);
			timeLeft--;
		}
	}

	function showResults (questions, questionContainer, resultsContainer) {
		clearInterval(timerId);
		$("input[type=radio]").attr('disabled', true);
		document.getElementById('btnSubmit').style.display = 'none';
		$("#btnShowResult").removeClass('d-none');

		var answerContainers = questionContainer.querySelectorAll('.answers');
		
		var userAnswer = '';
		var numCorrect = 0;
		
		for (var i=0; i<lenData; i++) {
			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
			
			if (userAnswer === questions[i].correctAnswer) {
				numCorrect ++;
				answerContainers[i].style.color = 'green';
			}
			else {
				answerContainers[i].style.color = 'red';
			}
		}

		var finalScore = (numCorrect / questions.length) * 100;
		finalScore = finalScore.toFixed(2);

		if (finalScore < 75) {
			document.getElementById('results').style.color = 'red';
		}
		else {
			document.getElementById('results').style.color = 'green';
		}

		resultsContainer.innerHTML = 'Your Score: ' + finalScore;
		showSuggestion(lenData, finalScore);
	}

	submitButton.onclick = function() {
		showResults(questions, questionContainer, resultsContainer);
		return false;
	}

	// window.onbeforeunload = function() {
	// 	return "Are you sure you want to leave?";
	// }
}

generateQuiz(questionsData, questionContainer, resultsContainer, submitButton);
