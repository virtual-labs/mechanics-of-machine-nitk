// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation ",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "A slider moves with uniform velocity on a revolving link of length r with angular velocity &omega;. The Coriolis acceleration component of a point on the slider relative to a coincident point on the link is equal to",
            "a": [
                {"option": "&omega; parallel to the link",      "correct": false},
                {"option": "2&omega; perpendicular to the link",     "correct": true},
                {"option": "&omega; perpendicular to the link",      "correct": false},
                {"option": "2&omega; parallel to the link",      "correct": false}
                // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:2&omega; perpendicular to the link</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The quick return mechanism which is an inversion of 4-bar linkage is",
            "a": [
                {"option": "Drag link mechanism  ",               "correct": true},
                {"option": "Whitworth quick return mechanism",   "correct": false},
                {"option": "Crank and slotted lever mechanism  ",      "correct":false },
                {"option": "None of the mentioned",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br> Correct Answer is : Drag link mechanism</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A simple quick return mechanism is shown in the figure. The forward to return ratio of the quick return mechanism is 2:1. If the radius of the crank O<sub>1</sub>P is 125 mm, then the distance 'd'(in mm) between the crank centre to lever pivot centre point should be<br><img src=\"../images/exp26d.png\"\ height=198 width=210/>",
            "a": [
                 {"option": "144.3 ",               "correct":false },
                {"option": "216.5",   "correct": false},
                {"option": "240.0",      "correct":false },
                {"option": "250.0",     "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is :250.0 </p>" // no comma here
        },
        { // Question 4
            "q": "4.	In the slider crank mechanism shown below, link 2 is fixed. This second inversion of slider crank mechanism is observed in ______<br><img src=\"../images/exp26e.png\"\ height=185 width=363/>",
            "a": [
                {"option": "Reciprocating air compressor ",               "correct":false },
                {"option": "I. C. engine ",   "correct": false},
                {"option": "Whitworth quick return mechanism",      "correct":true },
                {"option": "Crank and slotted lever quick return mechanism ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Whitworth quick return mechanism  </p>"  // no comma here
        }
    ]
};
