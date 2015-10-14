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
            "q": "For l/r ratio 2, when crank and connecting rod are making equal angle with +X axis what is the ratio of angular velocity of crank and connecting rod?",
            "a": [
                {"option": "2",      "correct": true},
                {"option": "0.5",     "correct": false},
                {"option": "4",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 2</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "At 0<sup>o</sup> crank angle of zero offset slider crank mechanism what is direction of angular velocity of connecting rod?",
            "a": [
                {"option": "Opposite of direction of crank rotation",               "correct": true},
                {"option": "Always counterclockwise",   "correct": false},
                {"option": "Always clockwise",      "correct": false},
                {"option": "Depends on link lengths",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Opposite of direction of crank rotation</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Direction of velocity of 5cm crank rotating at 3rpm (CW) ?",
            "a": [
                {"option": "Perpendicular to crank in the direction of rotation ",           "correct": true},
                {"option": "Perpendicular to crank opposite to direction of rotation",                  "correct": false},
                {"option": "Along the crank directed towards center",  "correct": false},
                {"option": "Along the crank away from the center",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Perpendicular to crank in the direction of rotation </p>" // no comma here
        },
        { // Question 4
            "q": "Velocity vector of slider is",
            "a": [
                {"option": "Parallel to the axis of slider",    "correct": true},
                {"option": "Perpendicular to axis of slider",     "correct": false},
                {"option": "At 45<sup>o</sup> to the axis of slider",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Parallel to the axis of slider </p>"  // no comma here
        },
        { // Question 5 
            "q": "Direction of angular velocity of crank and connecting rod is same at which of the following positions of crank angles",
            "a": [
                {"option": "120<sup>o</sup>",    "correct": true},
                {"option": "0<sup>o</sup>",     "correct": false},
		 {"option": "60<sup>o</sup>",  "correct": false},
                {"option": "None of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 120<sup>o</sup> </p>"  // no comma here
        }   // no comma here
    ]
};
