
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
            "q": "In a spring-controlled governor, when the controlling force _____________ as the radius of rotation increases, it is said to be a stable governor.",
            "a": [
                {"option": "remains constant",      "correct":false},
                {"option": "decreases",      "correct":false},
                {"option": "increases",      "correct":true},
                {"option": "none of the mentioned ",      "correct": false}
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : increases</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A spring controlled governor is said to be isochronous when the controlling force",
            "a": [
                {"option": "increases as the radius of rotation decreases","correct": false},
				{"option": "increases as the radius of rotation increases", "correct": false},
                {"option": "remains constant for all radii of rotation", "correct": true},
				{"option": "decreases as the radius of rotation decreases", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : remains constant for all radii of rotation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A spring controlled governor is found unstable. It can be made stable by",
            "a": [
                {"option": "increasing the spring stiffness",  "correct": false},
                {"option": "decreasing the spring stiffness",  "correct": true},
				{"option": "increasing the ball mass",  "correct": false},
				{"option": "decreasing the ball mass",  "correct": false}
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : decreasing the spring stiffness</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A Hartnell governor is a governor of the",
            "a": [
                {"option": "inertia type ","correct": false},
                {"option": "spring-controlled type", "correct": true},
				{"option": "pendulum type", "correct": false},
				{"option": "dead weight type ", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : spring-controlled type</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The sensitiveness of a Governor is <br/>&nbsp;&nbsp;&nbsp;&nbsp;Where N<sub>1</sub> = Minimum equilibrium speed<br/>&nbsp;&nbsp;&nbsp;&nbsp;N<sub>2</sub> = Maximum equilibrium speed<br/>&nbsp;&nbsp;&nbsp;&nbsp;N = Mean speed",
            "a": [
                {"option": "( N<sub>2</sub>+N<sub>1</sub> ) / N  ","correct": false},
                {"option": "( N<sub>2</sub>+N<sub>1</sub> ) &times; N  ", "correct": false},
				{"option": "( N<sub>2</sub>-N<sub>1</sub> ) / N  ", "correct": true},
				{"option": "( N<sub>2</sub>-N<sub>1</sub> ) &times; N  ", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : ( N<sub>2</sub>-N<sub>1</sub> ) / N  </p>" // no comma here
        }
        
   
    ]
};
