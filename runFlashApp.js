//var questions = require('./BasicCard.js');
var inquirer = require('inquirer');
//import basic flash card constructor
var flashCards = require('./BasicCard.js');
//import clozeCard constructor
var clozeCards = require('./ClozeCard.js');

var score = 0;


//first question (basic card)
var firstQuestion = new flashCards.basicCard(
	'Who is Bruce Wayne?',
	'Batman');

//second question (cloze card)
var secondQuestion = new clozeCards.clozeCard(
	'Peter Parker is Spider-Man',
	'Spider-Man');

//third question (basic card)
var thirdQuestion = new flashCards.basicCard(
	'Who was the first Avenger?',
	'Captain America');

//fourth question (cloze card)
var fourthQuestion = new clozeCards.clozeCard(
	'Lex Luthor is the smartest human in the DC Universe',
	'Lex Luthor');

var brokenCloze = new clozeCards.clozeCard(
	'This does not work',
	'oops');

	//asks the first question (basic card)
	inquirer.prompt([ {
		name: 'question1',
		message: firstQuestion.front
	}
	]).then(function(answers){
		if(firstQuestion.back === answers.question1){
			score++;
			console.log('You are Correct! Next Question!');
			console.log('===================================================');
		} else { console.log('Sorry, the correct answer was Batman. Next Question!');
				 console.log('==============================================')}

			//asks the second question (cloze card)
			inquirer.prompt([ {
				name: 'question2',
				message: secondQuestion.partial
			}
			]).then(function(answers){
					if(secondQuestion.cloze === answers.question2){
						console.log('You are Correct! Next Question')
						score++;
					} else { console.log('Sorry, the correct answer was Spider-Man')}
					console.log('===================================================');

						//asks the third question (basic Card)
						inquirer.prompt([ {
							name: 'question3',
							message: thirdQuestion.front
						}
						]).then(function(answers){
								if(thirdQuestion.back === answers.question3){
									console.log('You are Correct! Next Question');
									score++;
								} else { console.log('Sorry, the correct answer was Captain America')}
								console.log('===================================================');

									//asks the fourth question (cloze Card)
									inquirer.prompt([ {
										name: 'question4',
										message: fourthQuestion.partial
									}
									]).then(function(answers){
											if(fourthQuestion.cloze === answers.question4){
												console.log('You are Correct!');
												score++;
											} else { console.log('Sorry, the correct answer was Lex Luthor')}
											console.log('===================================================');

												//show score after user finishes flash card 
												console.log('Your score is: ' + score);

												if(score <= 2) {
													console.log('You need to read more comics!')
												} else if (score <=3) {
													console.log('Not too bad. Maybe one day you will be as good as me!')
												} else {console.log('Great Job!')};
								})
							})
						})
					});


