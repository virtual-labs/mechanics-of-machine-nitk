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
