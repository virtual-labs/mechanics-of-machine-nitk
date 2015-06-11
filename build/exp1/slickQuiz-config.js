// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

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
            "q": "Grashof's condition is the necessary condition for?",
            "a": [
                {"option": "Continuous motion",      "correct": true},
                {"option": "Non Continuous motion",     "correct": false},
                {"option": "Intermittent motion",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Continuous motion</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Continuous motion</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is the inversion of four bar chain?",
            "a": [
                {"option": "Beam engine",               "correct": true},
                {"option": "Pendulum pump",   "correct": false},
                {"option": "Oscillating cylinder",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Beam engine</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Beam engine</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The links in a four bar mechanism is ?",
            "a": [
                {"option": "Binary link ",           "correct": true},
                {"option": "Ternary link",                  "correct": false},
                {"option": "Flexible link",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans: Binary link </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Binary link </p>" // no comma here
        },
        { // Question 4
            "q": " Coupled wheel of locomotive is an inversion of ",
            "a": [
                {"option": " Four bar mechanism ",    "correct": true},
                {"option": " Double slider crank mechanism",     "correct": false},
                {"option": "Slider crank mechanism",      "correct": false},
              {"option": "Six bar mechanism",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:  Four bar mechanism </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:  Four bar mechanism </p>"  // no comma here
        },
        { // Question 5 
            "q": " Watts indicator is an inversion of ",
            "a": [
                {"option": "Four bar mechanism ",    "correct": true},
                {"option": " Double slider crank mechanism",     "correct": false},
		 {"option": "Slider crank mechanism",  "correct": false},
                {"option": " Six bar mechanism",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: Four bar mechanism </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans: Four bar mechanism </p>"  // no comma here
        },
 { // Question 5
            "q": "The part of IC engine which acts as coupler is……",
            "a": [
                {"option": "Connecting rod ",    "correct": true},
                {"option": " Piston ",     "correct": false},
		 {"option": " Piston ring ",  "correct": false},
                {"option": " Fly wheel",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Connecting rod</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Connecting rod</p>"  // no comma here
        },
  { // Question 5
            "q": " Beam engine is",
            "a": [
                {"option": "Crank and lever mechanism",    "correct": true},
                {"option": " Crank and crank mechanism",     "correct": false},
		 {"option": " Double crank mechanism",  "correct": false},
                {"option": "None of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Crank and lever mechanism</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Crank and lever mechanism</p>"  // no comma here
        },
 { // Question 5
            "q": " In the beam engine which link connects piston rod coupler and frame?",
            "a": [
                {"option": " Lever ",    "correct": true},
                {"option": " Crank",     "correct": false},
		 {"option": " Coupler",  "correct": false},
                {"option": " None of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: Lever</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Lever</p>"  // no comma here
        }   // no comma here
    ]
};
