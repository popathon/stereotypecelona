// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "<img src='images/STEREO_LOGO.png'/> Stereotypecelona",
        "main": "<h2>Do you have any prejudice about the neighborhoods of Barcelona?</h2><p>Do you think people are very different from Sarrià to Raval? Do you think you could recognize where do people live by just seeing them? Check if your stereotypes are right.</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1": "Awesome!",
        "level2": "Well done!",
        "level3": "Well done!",
        "level4": "Not bad!",
        "level5": "Another time maybe!"
    },
    "questions": [{ // Question 1 - Multiple Choice, Single True Answer
            "q": "Do you know where Eduard lives?",
            "v": "video/01-eduard-horta.mp4",
            "g": "",
            "a": [{
                    "option": "Ciutat Vella",
                    "correct": 0
                }, {
                    "option": "l'Eixample",
                    "correct": 0
                }, {
                    "option": "Sants-Montjuic",
                    "correct": 0
                }, {
                    "option": "Les Corts",
                    "correct": 0
                }, {
                    "option": "Sarrià-Sant Gervasi",
                    "correct": 0
                }, {
                    "option": "Gràcia",
                    "correct": 0
                }, {
                    "option": "Horta-Guinardó",
                    "correct": true
                }, {
                    "option": "Nou Barris",
                    "correct": 0
                }, {
                    "option": "Sant Andreu",
                    "correct": 0
                }, {
                    "option": "Sant Martí",
                    "correct": 0
                } // no comma here
            ],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Congrats!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>Horta-Guinardó</p>",
            "incorrect": "<p class='result-exclamation'><span>Booh!</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>Horta-Guinardó</p>" // no comma here
        }, { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Do you know where Laura lives?",
            "v": "video/02-laura-eixample.mp4",
            "g": "",
            "a": [{
                    "option": "Ciutat Vella",
                    "correct": false
                }, {
                    "option": "l'Eixample",
                    "correct": true
                }, {
                    "option": "Sants-Montjuic",
                    "correct": false
                }, {
                    "option": "Les Corts",
                    "correct": false
                }, {
                    "option": "Sarrià-Sant Gervasi",
                    "correct": false
                }, {
                    "option": "Gràcia",
                    "correct": false
                }, {
                    "option": "Horta-Guinardó",
                    "correct": false
                }, {
                    "option": "Nou Barris",
                    "correct": false
                }, {
                    "option": "Sant Andreu",
                    "correct": false
                }, {
                    "option": "Sant Martí",
                    "correct": false
                } // no comma here
            ],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Congrats!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>l'Eixample</p>",
            "incorrect": "<p class='result-exclamation'><span>Hmmm.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>l'Eixample</p>" // no comma here
        }, { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Do you know where Hermini lives?",
            "v": "video/03-hermini-ciutatvella.mp4",
            "g": "",
            "a": [{
                    "option": "Ciutat Vella",
                    "correct": true
                }, {
                    "option": "l'Eixample",
                    "correct": false
                }, {
                    "option": "Sants-Montjuic",
                    "correct": false
                }, {
                    "option": "Les Corts",
                    "correct": false
                }, {
                    "option": "Sarrià-Sant Gervasi",
                    "correct": false
                }, {
                    "option": "Gràcia",
                    "correct": false
                }, {
                    "option": "Horta-Guinardó",
                    "correct": false
                }, {
                    "option": "Nou Barris",
                    "correct": false
                }, {
                    "option": "Sant Andreu",
                    "correct": false
                }, {
                    "option": "Sant Martí",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p class='result-exclamation'><span>Brilliant!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>Ciutat Vella</p>",
            "incorrect": "<p class='result-exclamation'><span>Not Quite.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>Ciutat Vella</p>" // no comma here
        }, { // Question 4
            "q": "Do you know where Namama lives?",
            "v": "video/04-namana-eixample.mp4",
            "g": "",
            "a": [{
                    "option": "Ciutat Vella",
                    "correct": false
                }, {
                    "option": "l'Eixample",
                    "correct": true
                }, {
                    "option": "Sants-Montjuic",
                    "correct": false
                }, {
                    "option": "Les Corts",
                    "correct": false
                }, {
                    "option": "Sarrià-Sant Gervasi",
                    "correct": false
                }, {
                    "option": "Gràcia",
                    "correct": false
                }, {
                    "option": "Horta-Guinardó",
                    "correct": false
                }, {
                    "option": "Nou Barris",
                    "correct": false
                }, {
                    "option": "Sant Andreu",
                    "correct": false
                }, {
                    "option": "Sant Martí",
                    "correct": false
                } // no comma here
            ],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Brilliant!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>l'Eixample</p>",
            "incorrect": "<p class='result-exclamation'><span>Not Quite.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>l'Eixample</p>" // no comma here
        }, { // Question 5
            "q": "Do you know where Ariadna lives?",
            "v": "video/05-ariadna-lescorts.mp4",
            "g": "",
            "a": [{
                "option": "Ciutat Vella",
                "correct": false
            }, {
                "option": "l'Eixample",
                "correct": false
            }, {
                "option": "Sants-Montjuic",
                "correct": false
            }, {
                "option": "Les Corts",
                "correct": true
            }, {
                "option": "Sarrià-Sant Gervasi",
                "correct": false
            }, {
                "option": "Gràcia",
                "correct": false
            }, {
                "option": "Horta-Guinardó",
                "correct": false
            }, {
                "option": "Nou Barris",
                "correct": false
            }, {
                "option": "Sant Andreu",
                "correct": false
            }, {
                "option": "Sant Martí",
                "correct": false
            }],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Brilliant!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>Les Corts</p>",
            "incorrect": "<p class='result-exclamation'><span>Not Quite.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>Les Corts</p>" // no comma here
        }, { // Question 6
            "q": "Do you know where Ariadna lives?",
            "v": "video/06-isabel-santandreu.mp4",
            "g": "",
            "a": [{
                "option": "Ciutat Vella",
                "correct": false
            }, {
                "option": "l'Eixample",
                "correct": false
            }, {
                "option": "Sants-Montjuic",
                "correct": false
            }, {
                "option": "Les Corts",
                "correct": false
            }, {
                "option": "Sarrià-Sant Gervasi",
                "correct": false
            }, {
                "option": "Gràcia",
                "correct": false
            }, {
                "option": "Horta-Guinardó",
                "correct": false
            }, {
                "option": "Nou Barris",
                "correct": false
            }, {
                "option": "Sant Andreu",
                "correct": true
            }, {
                "option": "Sant Martí",
                "correct": false
            }],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Brilliant!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>Sant Andreu</p>",
            "incorrect": "<p class='result-exclamation'><span>Not Quite.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>Sant Andreu</p>" // no comma here
        }, { // Question 7
            "q": "Do you know where Ariadna lives?",
            "v": "video/07-fernando-santmarti.mp4",
            "g": "",
            "a": [{
                "option": "Ciutat Vella",
                "correct": false
            }, {
                "option": "l'Eixample",
                "correct": false
            }, {
                "option": "Sants-Montjuic",
                "correct": false
            }, {
                "option": "Les Corts",
                "correct": false
            }, {
                "option": "Sarrià-Sant Gervasi",
                "correct": false
            }, {
                "option": "Gràcia",
                "correct": false
            }, {
                "option": "Horta-Guinardó",
                "correct": false
            }, {
                "option": "Nou Barris",
                "correct": false
            }, {
                "option": "Sant Andreu",
                "correct": false
            }, {
                "option": "Sant Martí",
                "correct": true
            }],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Brilliant!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>Sant Martí</p>",
            "incorrect": "<p class='result-exclamation'><span>Not Quite.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>Sant Martí</p>" // no comma here
        }, { // Question 8
            "q": "Do you know where Elena lives?",
            "v": "video/08-elena-sarria.mp4",
            "g": "",
            "a": [{
                "option": "Ciutat Vella",
                "correct": false
            }, {
                "option": "l'Eixample",
                "correct": false
            }, {
                "option": "Sants-Montjuic",
                "correct": false
            }, {
                "option": "Les Corts",
                "correct": false
            }, {
                "option": "Sarrià-Sant Gervasi",
                "correct": true
            }, {
                "option": "Gràcia",
                "correct": false
            }, {
                "option": "Horta-Guinardó",
                "correct": false
            }, {
                "option": "Nou Barris",
                "correct": false
            }, {
                "option": "Sant Andreu",
                "correct": false
            }, {
                "option": "Sant Martí",
                "correct": false
            }],
            "select_any": true,
            "correct": "<p class='result-exclamation'><span>Brilliant!</span></p><p class='result-explanation'>You are right!</p><p class='result-district'>Sarrià-Sant Gervasi</p>",
            "incorrect": "<p class='result-exclamation'><span>Not Quite.</span></p><p class='result-explanation'>The correct answer was:</p><p class='result-district'>Sarrià-Sant Gervasi</p>" // no comma here
        } // no comma here
    ]
};