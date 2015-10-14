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
            "q": "Angular acceleration of input link rotating with a constant angular velocity is ?",
            "a": [
                {"option": "zero",      "correct": true},
                {"option": "unity",     "correct": false},
                {"option": "not defined",      "correct": false},
                {"option": "can not be determined without link length",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is : zero</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which amongst the following are not defined in case of a rotating link?",
            "a": [
                {"option": "All mentioned accelerations are defined",               "correct": true},
                {"option": "Centripetal Acceleration",   "correct": false},
                {"option": "Tangetial Acceleration",      "correct": false},
                {"option": "Total Acceleration",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct answer is : All mentioned accelerations are defined</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Tangential Acceleration at a point on a link is not proportional to ?",
            "a": [
                {"option": "Angular Velocity of the link",           "correct": true},
                {"option": "Angular acceleration of the link",                  "correct": false},
                {"option": "Radial distance to the point on the link",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct answer is : Angular Velocity of the link </p>" // no comma here
        },
        { // Question 4
            "q": "Centripetal Acceleration at a point on a link does not depend on ?",
            "a": [
                {"option": "Angular Velocity of the link",           "correct": false},
                {"option": "Angular acceleration of the link",                  "correct": true},
                {"option": "Radial distance to the point on the link",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct answer is : Angular acceleration of the link </p>" // no comma here
        },
	{ // Question 4
            "q": "Tangential Acceleration at a point on a link ?",
            "a": [
                {"option": "is perpendicular to the link",           "correct": true},
                {"option": "is parallel to the link",                  "correct": false},
                {"option": "is at 45<sup>o</sup> to the link in the direction of motion",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct answer is : is perpendicular to the link</p>" // no comma here
        },
        { // Question 5 
            "q": "Which of the following is not true in case of centripetal acceleration?",
            "a": [
                {"option": "It is perpendicular to the link ",    "correct": true},
                {"option": "It is parallel to the link",     "correct": false},
		 {"option": "It passes through the center of rotation",  "correct": false},
                {"option": "Its magnitude depends on the angular velocity of the link",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : 'It is perpendicular to the link' is not true for centripetal acceleration</p>"  // no comma here
        }  // no comma here
    ]
};
