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
            "q": "For l/r ratio 3 and crank length equal to offset what is the quick return ratio?",
            "a": [
                {"option": "1.19",      "correct": true},
                {"option": "1.59",     "correct": false},
                {"option": "1.39",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 1.19</p>" // no comma here
        },
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "For l/r ratio 3 and offset equal to 1.5 times the cranklength what is the quick return ratio?",
            "a": [
                {"option": "1.35",      "correct": true},
                {"option": "1.45",     "correct": false},
                {"option": "1.55",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 1.35</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "With increase in offset from 0 to crank length QRR?",
            "a": [
                {"option": "increases ",           "correct": true},
                {"option": "decreases",                  "correct": false},
                {"option": "remains same",  "correct": false},
                {"option": "increase upto half of crank length then decreases",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : increases </p>" // no comma here
        },
        { // Question 4
            "q": "Slider is at extreme position when",
            "a": [
                {"option": "crank and connecting rod are aligned",    "correct": true},
                {"option": "crank and connecting rod are perpendicular",     "correct": false},
                {"option": "depends on link lengths",      "correct": false},
              {"option": "none of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : crank and connecting rod are aligned </p>"  // no comma here
        },
        { // Question 5 
            "q": "For given offset and crank length decrease in connecting rod length leads to ",
            "a": [
                {"option": "increase in QRR",    "correct": true},
                {"option": "decrease in QRR",     "correct": false},
		 {"option": "no change in QRR",  "correct": false},
                {"option": "can't be determined",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : increase in QRR </p>"  // no comma here
        }   // no comma here
    ]
};
