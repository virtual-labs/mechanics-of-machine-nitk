
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
            "q": "The Tchebichev lambda mechanism is primarily a _________ mechanism",
            "a": [
                {"option": "Quick- Return Mechanism","correct": false},
				{"option": "Circular Tracing Mechanism", "correct": false},
                {"option": "Straight Line Mechanism", "correct": true},
				{"option": "Walking Mechanism", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : Straight Line Mechanism</p>" // no comma here
        },
      		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the ratio of links OB: OQ: BC of the Tchebichev walking mechanism?",
            "a": [
                {"option": "1:1:2","correct": false},
                {"option": "1:2:2.5", "correct": true},
				{"option": "1:1:1", "correct": false},
				{"option": "1:2:1", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : 1:2:2.5</p>" // no comma here
        }      
       ]
};
