// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation",
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
            "q": "Which of these gives a perfect straight line motion?",
            "a": [
                {"option": "Hart's Inversor",      "correct": true},
                {"option": "Modified Scott Russel Mechanism",     "correct": false},
                {"option": "Watt's straight line linkage",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Continuous motion</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Continuous motion</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is the inversion of four bar chain?",
            "a": [
                {"option": "Beam engine",               "correct": true},
                {"option": "Pendulum pump",   "correct": false},
                {"option": "Oscillating cylinder",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Beam engine</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Beam engine</p>" // no comma here
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
            "q": " Coupled wheel of locomotive is an inversion of ",
            "a": [
                {"option": " Four bar mechanism ",    "correct": true},
                {"option": " Double slider crank mechanism",     "correct": false},
                {"option": "Slider crank mechanism",      "correct": false},
              {"option": "Six bar mechanism",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:  Four bar mechanism </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:  Four bar mechanism </p>"  // no comma here
        },
        { // Question 5 
            "q": " Watts indicator is an inversion of ",
            "a": [
                {"option": "Four bar mechanism ",    "correct": true},
                {"option": " Double slider crank mechanism",     "correct": false},
		 {"option": "Slider crank mechanism",  "correct": false},
                {"option": " Six bar mechanism",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans: Four bar mechanism </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans: Four bar mechanism </p>"  // no comma here
        }
   ]
};
