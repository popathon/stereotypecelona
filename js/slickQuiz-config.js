// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "<img src='images/STEREO_LOGO.png'/> Stereotypecelona",
        "main":    "<h3>Do you have any prejudice about the neighborhoods of Barcelona?</h3><p>Do you think people are very different from Sarrià to Raval? Do you think you could recognize where do people live by just seeing them? Check if your stereotypes are right.</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Awesome!",
        "level2":  "Well done!",
        "level3":  "Well done!",
        "level4":  "Not bad!",
        "level5":  "Another time maybe!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "DO YOU KNOW WHERE EDUARD LIVES?",
            "v": "video/Horta.mp4",
            "g": "",
            "a": [
                {"option": "Ciutat Vella",      "correct": false},
                {"option": "l'Eixample",     "correct": false},
                {"option": "Sants-Montjuic",      "correct": false},
                {"option": "Les Corts",      "correct": false},
                {"option": "Sarrià-Sant Gervasi",      "correct": false},
                {"option": "Gràcia",      "correct": false},
                {"option": "Horta-Guinardó",      "correct": true},
                {"option": "Nou Barris",      "correct": false},
                {"option": "Sant Andreu",      "correct": false},
                {"option": "Sant Martí",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Congrats!</span></p><p>Horta-Guinardó</p><img src='images/dist07.png' />",
            "incorrect": "<p><span>Booh!</span></p><p>Horta-Guinardó</p><img src='images/dist07.png' />" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "DO YOU KNOW WHERE LAURA LIVES?",
            "v": "video/eixample.mp4",
            "g": "",
            "a": [
                {"option": "Ciutat Vella",      "correct": false},
                {"option": "l'Eixample",     "correct": true},
                {"option": "Sants-Montjuic",      "correct": false},
                {"option": "Les Corts",      "correct": false},
                {"option": "Sarrià-Sant Gervasi",      "correct": false},
                {"option": "Gràcia",      "correct": false},
                {"option": "Horta-Guinardó",      "correct": false},
                {"option": "Nou Barris",      "correct": false},
                {"option": "Sant Andreu",      "correct": false},
                {"option": "Sant Martí",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Congrats!</span></p><p>l'Eixample</p><img src='images/dist02.png' />",
            "incorrect": "<p><span>Hmmm.</span></p><p>l'Eixample</p><img src='images/dist02.png' />" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "DO YOU KNOW WHERE HERMINI LIVES?",
            "v": "video/raval.mp4",
            "g": "",
            "a": [
                {"option": "Ciutat Vella",      "correct": true},
                {"option": "l'Eixample",     "correct": false},
                {"option": "Sants-Montjuic",      "correct": false},
                {"option": "Les Corts",      "correct": false},
                {"option": "Sarrià-Sant Gervasi",      "correct": false},
                {"option": "Gràcia",      "correct": false},
                {"option": "Horta-Guinardó",      "correct": false},
                {"option": "Nou Barris",      "correct": false},
                {"option": "Sant Andreu",      "correct": false},
                {"option": "Sant Martí",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span></p><p>Ciutat Vella</p><img src='images/dist01.png' />",
            "incorrect": "<p><span>Not Quite.</span></p><p>Ciutat Vella</p><img src='images/dist01.png' />" // no comma here
        } // no comma here
    ]
};
