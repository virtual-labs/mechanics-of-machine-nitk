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
            "q": "Which among these is a pendulum type governor",
            "a": [
                {"option": "Inertia governor",      "correct": false},
                {"option": "Watt governor",     "correct": true},
                {"option": "Porter governor",      "correct":false },
                {"option": "Proell governor",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Watt governor</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which component control variation of speed each cycle of the engine?",
            "a": [
                {"option": "Governor",      "correct": false},
                {"option": "Flywheel",     "correct": true},
                {"option": "Accelerator",      "correct": false},
                {"option": "Carburettor",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Flywheel</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Lightest fly balls used among these in",
            "a": [
                {"option": "Watt governor",      "correct": false},
                {"option": "Porter governor",     "correct": false},
                {"option": "Proell governor",      "correct": true},
                {"option": "Equal weight in all",     "correct":false } // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Proell governor</p>" // no comma here
        },
        { // Question 4
            "q": "Which one of the following is a Dead weight type governor?",
            "a": [
                {"option": "Porter Governor",    "correct": true},
                {"option": "Hartnell Governor",     "correct": false},
                {"option": "Wilson-Hartnell Governor",      "correct": false}, // no comma here
                {"option": "Hartung Governor",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Porter Governor </p>"  // no comma here
        },
		{ // Question 5
			"q": "The height of a governor is distance measure from",
			"a": [
				{"option": "the centre of two balls mass",    "correct": false},
				{"option": "the centre of balls mass to the point of intersection of upper arms",     "correct": true},
				{"option": "the centre of balls mass to the point of intersection of  lower links",      "correct": false}, 
				{"option": "the point of intersection of upper arms to the point of intersection of  lower links",  "correct": false} // no comma here
			],
			"correct": "<p><span>Right answer</span</p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:the centre of balls mass to the point of intersection of upper arms </p>"  // no comma here
		}
        
   ]
};
