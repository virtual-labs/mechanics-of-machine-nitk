// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation ",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Balancing of multiple mass in single  plane the net force and moment should be-",
            "a": [
                {"option": "Net force > net moment",      "correct": false},
                {"option": "Net moment > net force",     "correct": false},
                {"option": "Net force = 0, net moment &ne; 0",      "correct": false},
                {"option": "Net force = 0, net moment = 0",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Net force = 0, net moment = 0</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Balancing is a method of correcting or eliminating unwanted inertia forces and couples in rotating and reciprocating parts of the machine",
            "a": [
                {"option": "True",               "correct": true},
                {"option": "False ",   "correct": false}
               // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : True </p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A system of rotating masses is said to be in dynamic balance if any resultant centrifugal force or couple does not exist.",
            "a": [
                {"option": "False",           "correct": false},
                {"option": "True",                  "correct": true}
                 // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:True </p>" // no comma here
        },
        { // Question 4
            "q": " Which of the following factors are not responsible for unbalancing in rotating systems?",
            "a": [
                {"option": "Errors",    "correct": false},
                {"option": "Tolerance",     "correct": false},
                {"option": "Shape of the rotor",      "correct": false}, // no comma here
                {"option": "None of the above",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span</p>",
            "incorrect": "<p><span>wrong</span> None of the above. </p>"  // no comma here
        }
        
   ]
};
