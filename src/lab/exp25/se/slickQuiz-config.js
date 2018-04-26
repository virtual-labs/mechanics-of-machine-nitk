// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys
//quiz
var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
		
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Identify all the 4 bar mechanisms in Jansen linkage.",  
        "a": [			
			],			
            },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these mechanism has six links?",	
            "a": [
				 {"option": "Tchebicheff",      "correct": false},
                {"option": "Peaucellier",     "correct": false},
                {"option": "Watt",      "correct": false },
                {"option": "Hart",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : Hart.</br>Hart's mechanism requires only six links as compared with the eight links required by the Peaucellier mechanism.</p>" // no comma here
        }		
   // no comma here
    ]
};
