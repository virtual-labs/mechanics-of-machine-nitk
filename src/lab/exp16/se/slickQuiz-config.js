// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge Exp1",
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
            "q": "How many four bar mechanisms are used in the Tchebichev walking mechanism?",
            "a": [
                {"option": "1",      "correct": true},
                {"option": "2",     "correct": false},
                {"option": "3",      "correct": false},
                {"option": "4",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans : 1</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : 1</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "If the shortest link is 10cm in Tchebichev Mechanism, what is the length of longest link?",
            "a": [
                {"option": "25cm",               "correct": true},
                {"option": "20cm",   "correct": false},
                {"option": "15cm",      "correct": false},
                {"option": "30cm",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br> Correct Answer is : 25cm</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The ratio of links in Tchebichev Mechanism (Shortest:Fixed:RemainingTwo) is ?",
            "a": [
                {"option": "1:2:2.5",           "correct": true},
                {"option": "1:2.5:2",                  "correct": false},
                {"option": "1:2:4",  "correct": false},
                {"option": "1:4:2",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is : 1:2:2.5 </p>" // no comma here
        },
        { // Question 4
            "q": " Which point on the Tchebichev Mechanism moves in approximate straight line? ",
            "a": [
                {"option": " Mid-point of shortest link ",    "correct": true},
                {"option": " Mid-point of longest link",     "correct": false},
                {"option": " End-point of shortest link",      "correct": false},
              {"option": " None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Mid-point of shortest link </p>"  // no comma here
        }
    ]
};
