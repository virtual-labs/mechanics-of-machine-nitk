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
            "q": "Acceleration of reciprocating part is maximum for scotch yoke mechanism when crank angle is ?",
            "a": [
                {"option": "0<sup>o</sup>",      "correct": true},
                {"option": "30<sup>o</sup>",     "correct": false},
                {"option": "60<sup>o</sup>",      "correct": false},
                {"option": "90<sup>o</sup>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 0<sup>o</sup></p>" // no comma here
        },
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "Amplitude of acceleration of reciprocating part of scotch yoke mechanism depends on?",
            "a": [
                {"option": "crank length only",      "correct": false},
                {"option": "angular velocity of crank only",     "correct": false},
                {"option": "both crank length and angular velocity of crank",      "correct": true},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : both crank length and angular velocity of crank</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Phase difference between displacement and acceleration of reciprocating part in scotch yoke mechanism is 180<sup>o</sup>",
            "a": [
                {"option": "True",           "correct": true},
                {"option": "False",                  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br></p>" // no comma here
        },
        { // Question 4
            "q": "For a crank length of 10cm rotating at 2rad/s what is the magnitude of maximum acceleration of reciprocating part",
            "a": [
                {"option": "None of these",    "correct": false},
                {"option": "10cm/s",     "correct": false},
                {"option": "20cm/s",      "correct": false},
              {"option": "40cm/s",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 40cm/s </p>"  // no comma here
        },
        { // Question 5 
            "q": "a=-&omega;<sup>2</sup>x for scotch yoke mechanism ",
            "a": [
                {"option": "True",           "correct": true},
                {"option": "False",                  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br></p>"  // no comma here
        }   // no comma here
    ]
};
