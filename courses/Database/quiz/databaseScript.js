// ===============================
//	Created by: Jason
// 	Email: jasonkurniadj@yahoo.com
// ===============================

var questionsData = [
	{
		question: "What is database?",
		answers: {
			a: 'Mobile game application.',
			b: 'An organized collection of data, generally stored and accessed electronically from a computer system.',
			c: 'Storage for clothes in house.'
		},
		correctAnswer: 'b'
	},
	{
		question: "DBMS stands for?",
		answers: {
			a: 'Data Manipulation System',
			b: 'Data Manipulation Studio',
			c: 'Database Management Studio',
			d: 'Database Management System'
		},
		correctAnswer: 'd'
	},
	{
		question: "SQL stands for?",
		answers: {
			a: 'S asdf agag ags',
			b: 'S asdfasdf',
			c: 'Structured Query Language'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is not included in the DBMS?",
		answers: {
			a: 'Mobile Legend',
			b: 'Oracle',
			c: 'SQL Server Management Studio',
			d: 'IBM DB2'
		},
		correctAnswer: 'a'
	},
	{
		question: "<code>CREATE DATABASE</code> __________",
		answers: {
			a: 'Database name',
			b: 'Table name',
			c: 'Field name'
		},
		correctAnswer: 'a'
	},
	{
		question: "<code>CREATE TABLE</code> __________ <code>( ... )</code>",
		answers: {
			a: 'Database name',
			b: 'Table name',
			c: 'Field name'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which does not include the data type from SQL?",
		answers: {
			a: 'CHAR',
			b: 'VARCHAR',
			c: 'INT',
			d: 'DOUBLE',
			e: 'IMAGES',
			f: 'BLOB'
		},
		correctAnswer: 'e'
	},
	{
		question: "<code>SELECT * FROM</code> __________",
		answers: {
			a: 'Database name',
			b: 'Table name',
			c: 'Field name'
		},
		correctAnswer: 'b'
	},
	{
		question: "<code>INSERT INTO</code> __________ <code>VALUES ( ... )</code>",
		answers: {
			a: 'Database name',
			b: 'Table name',
			c: 'Field name'
		},
		correctAnswer: 'b'
	},
	{
		question: "<code>UPDATE tableName SET</code> __________ <code>= newValue</code>",
		answers: {
			a: 'Database name',
			b: 'Table name',
			c: 'Field name'
		},
		correctAnswer: 'c'
	},
	{
		question: "Which statement is correct?",
		answers: {
			a: 'DROP TABLE tableName',
			b: 'DELETE TABLE tableName',
			c: 'POP TABLE tableName'
		},
		correctAnswer: 'a'
	},
	{
		question: "__________ <code>FROM tableName</code>",
		answers: {
			a: 'DELETE',
			b: 'DROP',
			c: 'POP'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is the correct SQL command to get data from another table in one query?",
		answers: {
			a: 'JOIN',
			b: 'GET',
			c: 'POST'
		},
		correctAnswer: 'a'
	},
	{
		question: "<code>SELECT * FROM tableName <br>&nbsp;&nbsp;&nbsp; JOIN otherTableName</code> __________ <code>tableName.fieldName = otherTableName.fieldName</code>",
		answers: {
			a: 'IN',
			b: 'ON',
			c: 'INTO'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is aggregate in SQL?",
		answers: {
			a: 'Designation for columns in a table that can do arithmetic operations.',
			b: 'A function to join all field name that can do arithmatics things.',
			c: 'A function where the values of multiple rows are grouped together as input on certain criteria to form a single value of more significant meaning.'
		},
		correctAnswer: 'c'
	}
];

function showSuggestion (lenData, finalScore) {
	var suggestionContainer = document.getElementById('suggestions');
	var answerContainers = questionContainer.querySelectorAll('.answers');

	var userAnswer = '';
	var notes = '';
	var suggestion = '';

	var flag1 = 0;
	var flag2 = 0;
	var flag3 = 0;
	var flag4 = 0;
	var flag5 = 0;

	for (var i=0; i<lenData; i++) {
		userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

		if (userAnswer != questionsData[i].correctAnswer) {
			if (i===0 || i===2 || i===6) {
				if (flag1 === 0) {
					suggestion += '<a href="../lesson1.html">Lesson 1: Introduction to Database</a><br>';
					flag1 = 1;
				}
			}
			else if (i===1 || i===3) {
				if (flag2 === 0){
					suggestion += '<a href="../lesson2.html">Lesson 2: DBMS</a><br>';
					flag2 = 1;
				}
			}
			else if (i===4 || i===5 || i===7) {
				if (flag3 === 0) {
					suggestion += '<a href="../lesson3.html">Lesson 3: Create, Use & Select SQL</a><br>';
					flag3 = 1;
				}
			}
			else if (i===8 || i===9 || i===10 || i===11) {
				if (flag4 === 0) {
					suggestion += '<a href="../lesson4.html">Lesson 4: Insert, Update & Delete SQL</a><br>';
					flag4 = 1;
				}
			}
			else if (i===12 || i===13 || i===14) {
				if (flag5 === 0) {
					suggestion += '<a href="../lesson5.html">Lesson 5: Advanced SQL I</a><br><a href="../lesson6.html">Lesson 6: Advanced SQL II</a><br>';
					flag5 = 1;
				}
			}
		}
	}

	if (suggestion === ""){
		suggestionContainer.innerHTML = "Congratulations!<br>You have mastered all the material in this course.";
	}
	else {
		if (finalScore > 90 && finalScore < 100)
			notes = 'Perfect! <br>A little more excellent..';
		else if (finalScore >=75 && finalScore <= 90)
			notes = 'Almost perfect! <br>You can do better than this..';
		else if (finalScore < 75)
			notes = 'Please try again! <br>Keep up the spirit and I recommend to relearn first..';

		suggestionContainer.innerHTML = notes + '<br><br>' + 'Suggestions to learn: <br>' + suggestion;
	}
}
