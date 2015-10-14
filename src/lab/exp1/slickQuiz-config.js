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
            "q": "Which of the following is possible for Input and Output links in case of Grashof linkage?",
            "a": [
                {"option": "Crank-Crank",      "correct": false},
                {"option": "Crank-Rocker",     "correct": false},
                {"option": "Rocker-Rocker",      "correct": false},
                {"option": "All",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span><br>Correct Answer is : All</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In Drag Link Mechanism",
            "a": [
                {"option": "Shortest link is fixed",               "correct": true},
                {"option": "Longest link is fixed",   "correct": false},
                {"option": "One other than shortest or longest link is fixed",      "correct": false},
                {"option": "Any link can be fixed",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span><br>Correct Answer is : Shortest Link is fixed</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "If longest link is fixed and shortest link is coupler which type of four bar mechanism would be formed?",
            "a": [
                {"option": "Double Rocker",           "correct": true},
                {"option": "Crank Rocker",            "correct": false},
                {"option": "Double Crank",  "correct": false},
                {"option": "Can't be determined",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span><br>Correct Answer Is : Double Rocker </p>" // no comma here
        },
        { // Question 4
            "q": " According to Grashof Condition ",
            "a": [
                {"option": "s+l&lt;p+q ",    "correct": true},
                {"option": "s+l&gt;p+q",     "correct": false},
                {"option": "s+p&gt;l+q",      "correct": false},
              {"option": "s+p&lt;l+q",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span><br>Correct Answer Is : s+l&lt;p+q</p>"  // no comma here
        },
        { // Question 5 
            "q": "If Grashof condition is met, which link definitely can complete a rotation ",
            "a": [
                {"option": "Shortest Link ",    "correct": true},
                {"option": "Longest Link",     "correct": false},
		 {"option": "Shorter of the remaining links",  "correct": false},
                {"option": "Longer of the remaining two links",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right Answer</span></p>",
            "incorrect": "<p><span>Wrong</span> Correct Answer Is : Shortest Link </p>"  // no comma here
        }
 
    ]
};
