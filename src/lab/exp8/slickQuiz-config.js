// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge Exp1",
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
            "q": "For connecting rod of 20cm and l/r ratio 2, when crank angle is 270<sup>o</sup> what is the magnitude of velocity of slider?",
            "a": [
                {"option": "Data insufficient",      "correct": true},
                {"option": "0",     "correct": false},
                {"option": "2cm/s",      "correct": false},
                {"option": "10cm/s",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Data Insufficient.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "At 0<sup>o</sup> crank angle of zero offset slider crank mechanism what is magnitude of angular velocity of connecting rod for l/r = 4 and angular velocity of crank 1 rad/s?",
            "a": [
                {"option": "0.25rad/s",               "correct": true},
                {"option": "1 rad/s",   "correct": false},
                {"option": "4rad/s",      "correct": false},
                {"option": "Data insufficient",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0.25rad/s</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Magnitude of velocity (at the joint with connecting rod) of 10cm crank rotating at 3rpm (CW) when crank angle is 90<sup>o</sup>?",
            "a": [
                {"option": "3.14cm/s",           "correct": true},
                {"option": "6.28cm/s",                  "correct": false},
                {"option": "0",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 3.14cm/s </p>" // no comma here
        },
        { // Question 4
            "q": "Velocity of slider when crank and connecting rod are aligned",
            "a": [
                {"option": "0",    "correct": true},
                {"option": "maximum",     "correct": false},
                {"option": "minimum",      "correct": false},
              {"option": "half the maximum ",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0 </p>"  // no comma here
        },
        { // Question 5 
            "q": "Magnitude of angular velocity of connecting rod in zero offset slider crank at crank angle 90<sup>o</sup>",
            "a": [
                {"option": "0",    "correct": true},
                {"option": ">angular velocity of crank",     "correct": false},
		 {"option": "<angular velocity of crank",  "correct": false},
                {"option": "None of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0 </p>"  // no comma here
        }   // no comma here
    ]
};
