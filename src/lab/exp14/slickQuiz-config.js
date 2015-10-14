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
            "q": "Which point of the rotating link in elliptical trammel traces a circular path?",
            "a": [
                {"option": "mid point",      "correct": true},
                {"option": "end point",     "correct": false},
                {"option": "both mid point and end point",      "correct": false},
                {"option": "neither mid point nor end point",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : mid point</p>" // no comma here
        },
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "The length of rotating link in elliptical trammel is equal to ?",
            "a": [
                {"option": "sum of major axis and minor axis",      "correct": false},
                {"option": "double of sum of major axis and minor axis",     "correct": false},
                {"option": "half of sum of major axis and minor axis",      "correct": true},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : half of sum of major axis and minor axis</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "End point of rotating link of elliptical trammel travels in a straight line",
            "a": [
                {"option": "True",           "correct": true},
                {"option": "False",                  "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br></p>" // no comma here
        },
        { // Question 4
            "q": "A point on the line obtained by extending the rotating link of elliptical trammel also traces an ellipse ",
            "a": [
                {"option": "True",           "correct": true},
                {"option": "False",                  "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br></p>"  // no comma here
        },
        { // Question 5 
            "q": "Ellipse traced by an elliptical trammel has major axis 180mm and minor axis 100mm, what is the diameter of the circle that can be drawn without changing the link lengths of the mechanism",
            "a": [
                {"option": "140",    "correct": true},
                {"option": "80",     "correct": false},
		 {"option": "70",  "correct": false},
                {"option": "none of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 140</p>"  // no comma here
        }   // no comma here
    ]
};
