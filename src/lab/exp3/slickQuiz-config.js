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
            "q": "For a 10cm link what is the value of tangential acceleration when it is rotating with a constant angular velocity of 2rad/s ?",
            "a": [
                {"option": "0cm/s<sup>2</sup>",      "correct": true},
                {"option": "20cm/s<sup>2</sup>",     "correct": false},
                {"option": "40cm/s",      "correct": false},
                {"option": "40cm/s<sup>2</sup>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : 0cm/s<sup>2</sup></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For a 10cm link what is the value of centripetal acceleration when it is rotating with a constant angular velocity of 2rad/s?",
            "a": [
                {"option": "0cm/s<sup>2</sup>",      "correct": false},
                {"option": "20cm/s<sup>2</sup>",     "correct": false},
                {"option": "40cm/s",      "correct": false},
                {"option": "40cm/s<sup>2</sup>",     "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 40cm/s<sup>2</sup> </p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For a 10cm link what is the magnitude of total acceleration at an instant when it is rotating with an angular velocity of 2rad/s and angular acceleration is 3rad/s<sup>2</sup>?",
            "a": [
                {"option": "50cm/s<sup>2</sup>",      "correct": true},
                {"option": "10cm/s<sup>2</sup>",     "correct": false},
                {"option": "70cm/s",      "correct": false},
                {"option": "70cm/s<sup>2</sup>",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 50cm/s<sup>2</sup> </p>" // no comma here
        },
        { // Question 4
            "q": " When non-zero, Centripetal and Tangential acceleration are  ",
            "a": [
                {"option": "Perpendicular to each other",    "correct": true},
                {"option": "Parallel to each other",     "correct": false},
                {"option": "Inclined to each other at an angle between 0<sup>o</sup> and 90<sup>o</sup>",      "correct": false},
              {"option": "Inclined to each other at an angle more than 90<sup>o</sup>",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Perpendicular to each other</p>"  // no comma here
        },
        { // Question 5 
            "q": " Angle made by the total acceleration of a point on the link with the link when the magnitude of angular acceleration is square of magnitude of centripetal acceleration ",
            "a": [
                {"option": "45<sup>o</sup> ",    "correct": true},
                {"option": "90<sup>o</sup>",     "correct": false},
		 {"option": "0<sup>o</sup>",  "correct": false},
                {"option": "Can't be determined",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>45<sup>o</sup></p>"  // no comma here
        }  // no comma here
    ]
};
