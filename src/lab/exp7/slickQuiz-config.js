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
            "q": "Measured from +X-axis what is the angular position of connecting rod when at a crank position of 30<sup>o</sup> the crank shaft is perpendicular to connecting rod ?",
            "a": [
                {"option": "120<sup>o</sup>",      "correct": true},
                {"option": "60<sup>o</sup>",     "correct": false},
                {"option": "160<sup>o</sup>",      "correct": false},
                {"option": "150<sup>o</sup>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 120<sup>o</sup></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the max distance travelled by slider for a slider crank mechanism with crank length 10cm?",
            "a": [
                {"option": "20cm",               "correct": true},
                {"option": "10cm",   "correct": false},
                {"option": "5cm",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 20cm</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the angle swept by connecting rod for l/r ratio 2?",
            "a": [
                {"option": "60<sup>o</sup>",           "correct": true},
                {"option": "30<sup>o</sup>",           "correct": false},
                {"option": "90<sup>o</sup>",  "correct": false},
                {"option": "Data insufficient",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 60<sup>o</sup> </p>" // no comma here
        },
        { // Question 4
            "q": "For a 5cm crank shaft rotating a 3rpm what is the average speed in cm/s of the slider?",
            "a": [
                {"option": "1",    "correct": true},
                {"option": "2",     "correct": false},
                {"option": "3",      "correct": false},
              {"option": "4",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 1 </p>"  // no comma here
        },
        { // Question 5 
            "q": "At which of the following crank angle position pairs is the slider at the same location",
            "a": [
                {"option": "All of these",    "correct": true},
                {"option": "30<sup>o</sup>,330<sup>o</sup>",     "correct": false},
		 {"option": "90<sup>o</sup>,270<sup>o</sup>",  "correct": false},
                {"option": "120<sup>o</sup>,240<sup>o</sup>",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : All of these </p>"  // no comma here
        }   // no comma here
    ]
};
