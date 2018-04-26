
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
		"q": "Cam angle is defined as the ",
            "a": [
                {"option": "Angle during which the follower returns to its initial position","correct": false},
                {"option": "Angle of rotation of the cam for a definite displacement of the follower", "correct": true},
				{"option": "Angle moved by the cam from beginning of ascent to the termination of descent", "correct": false},
				{"option": "None of the above", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : Angle of rotation of the cam for a definite displacement of the follower</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For high speed engines, the cam follower should move with",
            "a": [
                {"option": "Uniform velocity","correct": false},
                {"option": "Simple harmonic motion", "correct": false},
				{"option": "Uniform acceleration & retardation", "correct": false},
				{"option": "Cycloidal motion", "correct":  true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : Cycloidal motion</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
		"q": "In its simplest form, a cam mechanism consists of following number of links",
            "a": [
                {"option": "1","correct": false},
                {"option": "2", "correct": false},
				{"option": "3", "correct": true},
				{"option": "4", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : 3</p>" // no comma here
       
            },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Cam size depends upon",
            "a": [
                {"option": "Base circle","correct": true},
                {"option": "Pitch circle", "correct": false},
				{"option": "Outer  circle", "correct": false},
				{"option": "None of the above", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : Base circle</p>" // no comma here
        }
		    
   
    ]
};
