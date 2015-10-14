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
            "q": "How many different link lengths are there in a Peaucellier Mechanism?",
            "a": [
                {"option": "3",      "correct": true},
                {"option": "4",     "correct": false},
                {"option": "6",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 3</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is not a perfect straight line mechanism?",
            "a": [
                {"option": "Watt",               "correct": true},
                {"option": "Peaucellier",   "correct": false},
                {"option": "Hart",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Watt</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The link in a Peaucellier mechanism is ?",
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
            "q": " Which of the following is true for Peaucellier mechanism shown below <img src='../images/exp17Q.png'/> ",
            "a": [
                {"option": "PC=BQ=CQ",    "correct": true},
                {"option": "AC=AB=3AO ",     "correct": false},
                {"option": "AO+OQ=QP",      "correct": false},
              {"option": "All of the above",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : PC=BQ=CQ </p>"  // no comma here
        },
        
   { // Question 5 
            "q": " Which of the following geometric figures is there in a Peaucellier Mechanism  ",
            "a": [
                {"option": "Trapezoid ",    "correct": false},
                {"option": " Rhombus",     "correct": true},
		 {"option": "Square",  "correct": false},
                {"option": " None of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span>Correct Answer is : Rhombus </p>"  // no comma here
        } // no comma here
    ]
};
