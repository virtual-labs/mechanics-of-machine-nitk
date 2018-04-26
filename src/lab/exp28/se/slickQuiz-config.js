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
            "q": "How many degrees of freedom does this mechanism have",
            "a": [
                {"option": "1",      "correct": true},
                {"option": "2",     "correct": false},
                {"option": "3",      "correct": false},
                {"option": "4",      "correct": false}
                // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:1</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many 4 bar mechanism are there in the Klann mechanism",
            "a": [
                {"option": "4",               "correct": false},
                {"option": "3",   "correct": false},
                {"option": "2",      "correct":true },
                {"option": "1",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br> Correct Answer is : 2</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The Klann Mechanism is primarily a ",
            "a": [
                 {"option": "Quick- Return Mechanism",               "correct":false },
                {"option": "Straight Line Mechanism",   "correct": false},
                {"option": "Circular Tracing Mechanism",      "correct":false },
                {"option": "Walking Mechanism",     "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is :Walking Mechanism</p>" // no comma here
        }
       
    ]
};
