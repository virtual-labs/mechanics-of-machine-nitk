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
            "q": "The propeller shaft consists of",
            "a": [
                {"option": "knuckle joint",      "correct": false},
                {"option": "flange coupling",     "correct": false},
                {"option": "universal joint",      "correct": true},
                {"option": "Rag joint",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:universal joint</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The universal joint consists of",
            "a": [
                {"option": "One forks",      "correct": false},
                {"option": "Two forks",     "correct": true},
                {"option": "Three forks",      "correct": false},
                {"option": "Four forks",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Two forks</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "With single Hooke's joint it is possible to connect two shafts, the axis of which have an angular misalignment up to",
            "a": [
                {"option": "10 degrees",      "correct": false},
                {"option": "20 degrees",     "correct": false},
                {"option": "30 degrees",      "correct": false},
                {"option": "40 degrees",     "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:40 degrees </p>" // no comma here
        },
        { // Question 4
            "q": "The driving rear axles moves up and down, the propeller shaft has one or more ______ to take care of jerks in the rear axles",
            "a": [
                {"option": "Ship joint",    "correct": false},
                {"option": "Elbow joint",     "correct": false},
                {"option": "Release joint",      "correct": false}, // no comma here
                {"option": "Universal joint",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Universal joint </p>"  // no comma here
        }
        
   ]
};
