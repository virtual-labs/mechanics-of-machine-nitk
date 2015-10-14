// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<a href='../index.html'>click here</a> to go to list of Experiments",
        "level1":  "Excellent! You should try another Experiment.",
        "level2":  "That was nice. May be next time you'll get all of them right! Good Luck!",
        "level3":  "Give another try at the simulator. You should be able to pick up few more things this time.",
        "level4":  "Probably you need to build some more understanding about the topic.",
        "level5":  "May be you should spend some more time with the concepts." // no comma here
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
            "q": "How many different link lengths are there in Hart's Inversor?",
            "a": [
                {"option": "3",               "correct": true},
                {"option": "4",   "correct": false},
                {"option": "6",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span> <br>Correct Answer is : 3</p>" // no comma here
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
            "q": "Number of links in Hart's Inversor is  ",
            "a": [
                {"option": " 6 ",    "correct": true},
                {"option": " 5",     "correct": false},
                {"option": "4",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right nswer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : 6 </p>"  // no comma here
        },
  


 { // Question 5
            "q": " Hart's Inversor draws a ",
            "a": [
                {"option": " Perfect Straight Line ",    "correct": true},
                {"option": " Approximate Straight Line",     "correct": false},
					 {"option": " Circle",  "correct": false},
                {"option": " None of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right Answer</span></p>",
            "incorrect": "<p><span>Wrong</span><br>Correct Answer is : Perfect Straight Line</p>"  // no comma here
        }   // no comma here
    ]
};
