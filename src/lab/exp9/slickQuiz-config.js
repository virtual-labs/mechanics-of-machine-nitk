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
            "q": "Angular acceleration of connecting rod at 0<sup>o</sup> crank angle?",
            "a": [
                {"option": "0",      "correct": true},
                {"option": "Maximum Clockwise",     "correct": false},
                {"option": "Maximum Anticlockwise",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a zero offset slider crank mechanism with 5cm crank, l/r ratio 2.5 rotating at constant angular velocity of 1rad/s, what is the magnitude of linear acceleration of the slider at 180<sup>o</sup> crank angle",
            "a": [
                {"option": "3cm/s<sup>2</sup>",               "correct": true},
                {"option": "0",   "correct": false},
                {"option": "7rad/s<sup>2</sup>",      "correct": false},
                {"option": "Data insufficient",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 3cm/s<sup>2</sup></p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the centripetal acceleration of connecting rod in zero offset slider crank mechanism with 1cm crank rotating at constant angular velocity &omega;",
            "a": [
                {"option": "0",               "correct": true},
                {"option": "&omega;<sup>2</sup>",   "correct": false},
                {"option": "1/omega; rad/s<sup>2</sup>",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0</p>" // no comma here
        },
        { // Question 4 - 
            "q": "In a zero offset slider crank mechanism with 5cm crank, l/r ratio 2.5 rotating at constant angular velocity of 1rad/s, what is the magnitude of linear acceleration of the slider at 180<sup>o</sup> crank angle",
            "a": [
                {"option": "7cm/s<sup>2</sup>",               "correct": true},
                {"option": "0",   "correct": false},
                {"option": "3rad/s<sup>2</sup>",      "correct": false},
                {"option": "Data insufficient",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 7cm/s<sup>2</sup></p>" // no comma here
        },
        { // Question 5 
            "q": "For zero offset slider crank mechanism with l/r = 3 at crank angle 90<sup>o</sup> what is the ratio of magnitude of acceleration of connecting rod to that of slider ",
            "a": [
                {"option": "3",    "correct": true},
                {"option": "0",     "correct": false},
		 {"option": "1/3",  "correct": false},
                {"option": "Data insufficient",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 3 </p>"  // no comma here
        }   // no comma here
    ]
};
