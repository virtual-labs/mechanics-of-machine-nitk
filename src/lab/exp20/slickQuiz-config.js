// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {    //QUIZ
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
            "q": "Pitch point on a cam is",
            "a": [
                {"option": "Any point on pitch curve",      "correct": false},
                {"option": "The point on cam pitch curve having the maximum pressure angle",     "correct": true},
                {"option": "The  point on pitch curve having the minimum pressure angle",      "correct": false},
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Correct Answer is : The point on cam pitch curve having the maximum pressure angle</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Throw of a cam is the maximum distance of the follower from",
            "a": [
                {"option": "Base circle",               "correct": true},
                {"option": "Pitch circle",   "correct": false},
                {"option": "Root circle",      "correct": false},
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Correct Answer is : Base circle</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A cam mechanism imparts following motion",
            "a": [
                {"option": "Rotating",           "correct": false},
                {"option": "Reciprocating",                  "correct": false},
                {"option": "Both (a) and (b)",  "correct": true},
                {"option": "None of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Correct Answer is :Both (a) and (b)</p>" // no comma here
        },
        { // Question 4
            "q": "A cam with a roller follower is an example of a ",
            "a": [
                {"option": "Lower pair",    "correct": false},
                {"option": "Higher pair",     "correct": true},
                {"option": "Open pair",      "correct": false},
              {"option": "Close pair",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Correct Answer is : Higher pair </p>"  // no comma here
        }
       ]
};
