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
            "q": "For dynamic   balancing of a shaft,",
            "a": [
                {"option": "The net dynamic force acting on the shaft is equal to zero",      "correct": false},
                {"option": "The net couple due to dynamic forces acting on the shaft is equal to zero",     "correct": false},
                {"option": "both (A) and (B)",      "correct": true},
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Continuous motion</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:both (A) and (B)</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The balancing of reciprocating and rotating parts of an engine is necessary when it runs at",
            "a": [
                {"option": "Slow speed",               "correct": false},
                {"option": "Medium speed",   "correct": false},
                {"option": "High speed",      "correct": true},
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br> Correct Answer is : High speed</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A disturbing mass m1 attached to a rotating shaft may be balanced by a single mass  m2 attached in same plane of rotation as that of m1 such that",
            "a": [
                {"option": "m<sub>1</sub>.r<sub>2</sub> = m<sub>2</sub>.r<sub>1</sub>",           "correct": false},
                {"option": "m<sub>1</sub>.r<sub>2</sub> = m<sub>2</sub>.r<sub>2</sub>",                  "correct": true},
                {"option": "m<sub>2</sub>.m<sub>1</sub> = r<sub>1</sub>.r<sub>2</sub>",  "correct": false},
                {"option": "None of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is : m<sub>1</sub>.r<sub>2</sub> = m<sub>2</sub>.r<sub>2</sub> </p>" // no comma here
        },
        { // Question 4
            "q": " For a balanced system force polygon should exist.",
            "a": [
                {"option": " False ",    "correct": false},
                {"option": " true",     "correct": true}
               // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : True</p>"  // no comma here
        }
    ]
};
