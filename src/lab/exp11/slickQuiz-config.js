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
            "q": "For crank radius 10cm what is the distance between extremes of the reciprocating part in scotch yoke mechanism?",
            "a": [
                {"option": "20cm",      "correct": true},
                {"option": "10cm",     "correct": false},
                {"option": "5cm",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 20cm</p>" // no comma here
        },
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following can not be a function representing output motion of scotch yoke mechanism (t is time)?",
            "a": [
                {"option": "sin t",      "correct": false},
                {"option": "cos t",     "correct": false},
                {"option": "tan t",      "correct": true},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : tan</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Scotch yoke mechanism follows SHM.",
            "a": [
                {"option": "True",           "correct": true},
                {"option": "False",                  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br></p>" // no comma here
        },
        { // Question 4
            "q": "Which of the following can not be representing output motion of scotch yoke mechanism",
            "a": [
                {"option": "sin(t)",    "correct": false},
                {"option": "sin(t+k)",     "correct": false},
                {"option": "k+sin(t)",      "correct": false},
              {"option": "All given options can be representing output motion of scotch yoke mechanism",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : All given options can be representing output motion of scotch yoke mechanism </p>"  // no comma here
        },
        { // Question 5 
            "q": "Angular velocity of crank is equivalent to ",
            "a": [
                {"option": "frequency of oscillation in SHM",    "correct": true},
                {"option": "amplitude of SHM",     "correct": false},
		 {"option": "phase lag of SHM",  "correct": false},
                {"option": "none of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : frequency of oscillation in SHM</p>"  // no comma here
        }   // no comma here
    ]
};
