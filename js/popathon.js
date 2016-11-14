$(function() {
    $('#slickQuiz').slickQuiz();
});

$(function() {
    $('#video').css({
        width: $(window).innerWidth() + 'px',
        height: $(window).innerHeight() + 'px'
    });

    $(window).resize(function() {
        $('#video').css({
            width: $(window).innerWidth() + 'px',
            height: $(window).innerHeight() + 'px'
        });
    });
});

(function() {

    var facesData = [{
        "name": "Barcelona",
        "info": {
            "density": 625.451420257866,
            "unemployment": 9.5,
            "income": 100,
            "foreigners": 47.12,
            "education": 28.4,
            "age": 43.5

        }
    }, {
        "name": "Ciutat Vella",
        "info": {
            "density": 837.25,
            "unemployment": 11,
            "income": 84.3,
            "foreigners": 88.4,
            "education": 27.3,
            "age": 40.2
        }
    }, {
        "name": "Eixample",
        "info": {
            "density": 794,
            "unemployment": 7.7,
            "income": 116.4,
            "foreigners": 52.75,
            "education": 38.5,
            "age": 44.6
        }
    }, {
        "name": "Sants­ Montjuic",
        "info": {
            "density": 771.25,
            "unemployment": 11,
            "income": 73.3,
            "foreigners": 51.03,
            "education": 22.2,
            "age": 43
        }
    }, {
        "name": "Les Corts",
        "info": {
            "density": 527,
            "unemployment": 6.9,
            "income": 162.5,
            "foreigners": 47.6,
            "education": 39.1,
            "age": 44.8
        }
    }, {
        "name": "Sarrià­ Sant Gervasi",
        "info": {
            "density": 337.16,
            "unemployment": 5,
            "income": 187.5,
            "foreigners": 40.3,
            "education": 48.6,
            "age": 42.8
        }
    }, {
        "name": "Gràcia",
        "info": {
            "density": 618.8,
            "unemployment": 8.1,
            "income": 102.2,
            "foreigners": 42.8,
            "education": 38.7,
            "age": 43.9
        }
    }, {
        "name": "Horta Guinardo",
        "info": {
            "density": 549.09,
            "unemployment": 9.9,
            "income": 79.8,
            "foreigners": 36.37,
            "education": 21.2,
            "age": 44.6
        }
    }, {
        "name": "Nou Barris",
        "info": {
            "density": 670.15,
            "unemployment": 13.9,
            "income": 52.2,
            "foreigners": 41.5,
            "education": 11.7,
            "age": 44
        }
    }, {
        "name": "Sant Andreu",
        "info": {
            "density": 766.57,
            "unemployment": 11.3,
            "income": 70,
            "foreigners": 44.22,
            "education": 19.5,
            "age": 43.2
        }
    }, {
        "name": "Sant Martí",
        "info": {
            "density": 888.8,
            "unemployment": 10.2,
            "income": 89,
            "foreigners": 43.43,
            "education": 23.2,
            "age": 42.8
        }
    }];

    var minDensity;
    var maxDensity;

    var scaleDensity = d3.scale.linear()
        .domain([d3.min(facesData, function(d) {
            return d.info.density;
        }), d3.max(facesData, function(d) {
            return d.info.density;
        })])
        .range([-1, 1]);

    var scaleUnemployment = d3.scale.linear()
        .domain([d3.min(facesData, function(d) {
            return d.info.unemployment;
        }), d3.max(facesData, function(d) {
            return d.info.unemployment;
        })])
        .range([1, -1]);

    var scaleIncome = d3.scale.linear()
        .domain([d3.min(facesData, function(d) {
            return d.info.income;
        }), d3.max(facesData, function(d) {
            return d.info.income;
        })])
        .range([-1, 1]);

    var scaleForeigners = d3.scale.linear()
        .domain([d3.min(facesData, function(d) {
            return d.info.foreigners;
        }), d3.max(facesData, function(d) {
            return d.info.foreigners;
        })])
        .range([-1, 1]);

    var scaleEducation = d3.scale.linear()
        .domain([d3.min(facesData, function(d) {
            return d.info.education;
        }), d3.max(facesData, function(d) {
            return d.info.education;
        })])
        .range([0, 1]);


    var c = d3.chernoff()
        .face(function(d) {
            return scaleDensity(Math.round(d.info.density));
        })
        .hair(function(d) {
            return scaleUnemployment(Math.round(d.info.unemployment));
        })
        .mouth(function(d) {
            return scaleIncome(Math.round(d.info.income));
        })
        .nosew(function(d) {
            return scaleDensity(Math.round(d.info.density));
        })
        .noseh(function(d) {
            return scaleIncome(Math.round(d.info.income));
        })
        .eyew(function(d) {
            return scaleUnemployment(Math.round(d.info.unemployment));
        })
        .eyeh(function(d) {
            return scaleEducation(Math.round(d.info.education));
        })
        .brow(function(d) {
            return scaleForeigners(Math.round(d.info.foreigners));
        });

    var w = 1024,
        h = 768;

    var vis = d3.select(".faces").append("svg:svg")
        .attr("class", "faces-container")
        .attr("viewBox", "0 0 " + w + " " + h)
        .attr("preserveAspectRatio", "xMinYMin")

    vis.selectAll("g.chernoff").data(facesData).enter()
        .append("svg:g")
        .attr("class", "chernoff")
        .attr("transform", function(d, i) {

            if (d.name == "Barcelona") {
                return "scale(1.1)translate(" +
                    (20) + "," + (80) + ")";
            } else if (i <= 5) {
                return "scale(1.1)translate(" +
                    (((i - 1) * 150) + 170) + "," + (80) + ")";
            } else {
                return "scale(1.1)translate(" +
                    (((i - 6) * 150) + 170) + "," + (280) + ")";
            }

        })
        .call(c)
        .append("foreignObject")
        .attr("width", 138)
        .attr("height", 200)
        .append("xhtml:div")
        .attr("class", "card")
        .html(function(d, i) {

            var densityContainer;
            var unemploymentContainer;
            var educationContainer;
            var incomeContainer;

            if (Math.floor(scaleDensity(d.info.density)) == 1) {
                densityContainer = "<p><span class='red-text'><strong>" + Math.round(d.info.density) + "</strong>hab/ha</span> · <strong>" + Math.round(d.info.foreigners) + "</strong>% foreigners</p>";
            } else if (Math.ceil(scaleDensity(d.info.density)) == -1) {
                densityContainer = "<p><span class='green-text'><strong>" + Math.round(d.info.density) + "</strong>hab/ha</span> · <strong>" + Math.round(d.info.foreigners) + "</strong>% foreigners</p>";
            } else {
                densityContainer = "<p><span class=''><strong>" + Math.round(d.info.density) + "</strong>hab/ha</span> · <strong>" + Math.round(d.info.foreigners) + "</strong>% foreigners</p>";
            }

            if (Math.floor(scaleUnemployment(d.info.unemployment)) == 1) {
                unemploymentContainer = "<div class='pull-right'><h6 class=''>Unemployment</h6><h2 class='green-text'>" + Math.round(d.info.unemployment) + "%</h2></div>";
            } else if (Math.ceil(scaleUnemployment(d.info.unemployment)) == -1) {
                unemploymentContainer = "<div class='pull-right'><h6 class=''>Unemployment</h6><h2 class='red-text'>" + Math.round(d.info.unemployment) + "%</h2></div>";
            } else {
                unemploymentContainer = "<div class='pull-right'><h6 class=''>Unemployment</h6><h2 class=''>" + Math.round(d.info.unemployment) + "%</h2></div>";
            }

            if (Math.floor(scaleEducation(d.info.education)) == 1) {
                educationContainer = "<div class='pull-right'><h6>education</h6><h2 class='green-text'>" + Math.round(d.info.education) + "%</h2></div>";
            } else if (Math.ceil(scaleEducation(d.info.education)) == 0) {
                educationContainer = "<div class='pull-right'><h6>education</h6><h2 class='red-text'>" + Math.round(d.info.education) + "%</h2></div>";
            } else {
                educationContainer = "<div class='pull-right'><h6>education</h6><h2 class=''>" + Math.round(d.info.education) + "%</h2></div>";
            }

            if (Math.floor(scaleIncome(d.info.income)) == 1) {
                incomeContainer = "<div class='pull-right'><h6>Fam.income</h6><h2 class='green-text'>" + Math.round(d.info.income) + "%</h2></div>";
            } else if (Math.ceil(scaleIncome(d.info.income)) == -1) {
                incomeContainer = "<div class='pull-right'><h6>Fam.income</h6><h2 class='red-text'>" + Math.round(d.info.income) + "%</h2></div>";
            } else {
                incomeContainer = "<div class='pull-right'><h6>Fam.income</h6><h2 class=''>" + Math.round(d.info.income) + "%</h2></div>";
            }

            return "<div class='pull-left'>" + "<h3>" + d.name + "</h3>" + densityContainer + "</div>" + unemploymentContainer + educationContainer + incomeContainer;

        });

})();

function play_single_sound() {
    document.getElementById('audiotag1').play();
}

// $(function() {
//     /** This code runs when everything has been loaded on the page */
//     /* Inline sparklines take their values from the contents of the tag */
//     $('.inlinesparkline').sparkline();

//     /* Sparklines can also take their values from the first argument 
//     passed to the sparkline() function */
//     var myvalues = [10, 8, 5, 7, 4, 4, 1];
//     $('.dynamicsparkline').sparkline(myvalues);

//     /* The second argument gives options such as chart type */
//     $('.dynamicbar').sparkline(myvalues, {
//         type: 'bar',
//         barColor: 'green'
//     });

//     /* Use 'html' instead of an array of values to pass options 
//     to a sparkline with data in the tag */
//     $('.inlinebar').sparkline('html', {
//         type: 'bar',
//         barColor: 'red'
//     });
// });