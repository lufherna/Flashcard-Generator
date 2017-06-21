//var questions = require('./BasicCard.js');
var inquirer = require('inquirer');
//import basic flash card constructor
var flashCards = require('./BasicCard.js');
//import clozeCard constructor
var clozeCards = require('./ClozeCard.js');


//first question (basic card)
var firstQuestion = new flashCards.basicCard(
	'Who is Bruce Wayne?',
	'Batman');

//second question (cloze card)
var secondQuestion = new clozeCards.clozeCard(
	'Peter Parker is Spider-Man',
	'Spider-Man',
	//partial
	'.... is Spider-Man');

//third question (basic card)
var thirdQuestion = new flashCards.basicCard(
	'Who was the first Avenger?',
	'Captain America');

//fourth question (cloze card)
var fourthQuestion = new clozeCards.clozeCard(
	'Lex Luthor is the smartest human in the DC Universe',
	'Lex Luthor',
	//partial
	'.... is the smartest human in the DC Universe');

//asks the first question (basic card)
inquirer.prompt([ {
	name: 'question1',
	message: firstQuestion.front
}
]).then(function(answers){
		if(firstQuestion.back === answers.question1){
			console.log('You are Correct! Next Question!')
		} else { console.log('Sorry, the correct answer was Batman. Next Question!')}
			//asks the second question (cloze card)
			inquirer.prompt([ {
				name: 'question2',
				message: secondQuestion.partial + ' ' + secondQuestion.full 
			}
			]).then(function(answers){
					if(secondQuestion.cloze === answers.question2){
						console.log('You are Correct! Next Question')
					} else { console.log('Sorry, the correct answer was Batman')}
				})
			});

/*{
	name: 'question2',
	message: secondQuestion.front
},
{
	name: 'question3',
	message: thirdQuestion.front
}*/