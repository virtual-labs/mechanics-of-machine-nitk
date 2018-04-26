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
            "q": "The universal joint permits a change in ",
            "a": [
                {"option": "Length of shaft",      "correct": false},
                {"option": "Speed of rotation",     "correct": false},
                {"option": "Angle of drive",      "correct": true}
                // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Angle of drive</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The centre part of typical universal joint is called",
            "a": [
                {"option": "Trunnion",               "correct": false},
                {"option": "Joint",   "correct": false},
                {"option": "Hearing",      "correct":false },
                {"option": "Spider",     "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br> Correct Answer is : Spider</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A universal joint uses a cap that has needle bearings in it.",
            "a": [
                {"option": " True ",    "correct": true},
                {"option": " False",     "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is :True </p>" // no comma here
        },
        { // Question 4
            "q": "The universal join is the positive drive",
            "a": [
                {"option": " True ",    "correct": true},
                {"option": " False",     "correct": false}
               // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : True</p>"  // no comma here
        }
    ]
};
