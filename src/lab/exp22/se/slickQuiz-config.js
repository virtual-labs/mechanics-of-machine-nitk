// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys
//quiz
var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
		
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "For a given fractional change of speed, if the displacement of the sleeve is high, then the governor is said to be",                       	
            "a": [
                {"option": "hunting",      "correct": false},
                {"option": "isochronous",     "correct": false},
                {"option": "sensitive",      "correct": true },
                {"option": "stable",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : sensitive</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a spring-controlled governor, the curve of controlling force is a straight line. When balls are 35 cm apart the controlling force is 1100 N and when 20 cm apart it is 550 N. To make the governor isochronous, the required initial tension on the spring would be ______ N.",	
            "a": [
				 {"option": "91.25",      "correct": false},
                {"option": "200",     "correct": false},
                {"option": "136.5",      "correct": false },
                {"option": "183.5",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : 183.5</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The total sleeve movement in a Hartnell governor is 3 cm. The mass of rotating balls is 1.5 kg each. At the mid position of the sleeve arm, which is 6.5 cm long, is horizontal. The ball arm has a length of 7.5 cm. At the mid position of the sleeve, the ball rotates at a radius of 10.5 cm. Due to the maladjustment of spring, the equilibrium speed of governor at top position is 415 rpm and in the lowest position, it is 430 rpm. The stiffness of the spring will be __________",
            "a": [
			    {"option": "7800",	 "correct": false},
				{"option": "78.32",	 "correct": false},
                {"option": "6135",	 "correct": true},
				{"option": "3500",	 "correct": false}//no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans :  6135</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Power of a governor is the",
            "a": [
                {"option": "mean force exerted at the sleeve for a given percentage change of speed", "correct": false},
				{"option": "work done at the sleeve for maximum equilibrium speed", "correct": false},
				{"option": "means force exerted at the sleeve for maximum equilibrium speed", "correct": false},				
                {"option": "none of the mentioned", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : none of the mentioned</p>" // no comma here
        },
		
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The controlling force diagram for a spring-controlled governor is ",
            "a": [
                {"option": "Not continuous",	 "correct": false},
                {"option": "Curve",	 "correct": false},
				{"option": "Straight line",	 "correct": true}, // no comma here
				{"option": "None of these",	 "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : Straight line</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A spring controlled governor is said to be unstable when the controlling force",
            "a": [
                {"option": "increases as the radius of rotation decreases", "correct": false},
				{"option": "increases as the radius of rotation increases", "correct": false},
				{"option": "remains constant for all radii of rotation           ", "correct": false},				
                {"option": "decreases as the radius of rotation decreases ", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : decreases as the radius of rotation decreases </p>" // no comma here
        }
		
   // no comma here
    ]
};
