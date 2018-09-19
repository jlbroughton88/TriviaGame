// Right when the user presses the first answer choice, start the timer at 30 seconds
// Once the timer goes off, display a "Game Over" screen that ends the game
//
// var answer1 = document.getElementById("#answer1");
// var answer2 = document.getElementById("#answer2");
// var answer3 = document.getElementById("#answer3");
// var answer4 = document.getElementById("#answer4");
var scoreCount = document.getElementById("scoreCount");
// var score = 0;

// // Score counter to show on screen.
// function scoreCount(score, scoreCount) {
//     scoreCount();
//     var element = document.getElementById("#scoreCount");
//     element.innerHTML = "Your Score: " + score;

//     if ("#answer1".onclick = true) {
//         scoreCount();
//         score++;
//         console.log(score)
//     }
// }

var secs = 30;
var elem = "#timeRemaining";
// Code for the timer
function countDown(timeLeft, timeRemaining) {
    function countDown(secs, elem) {
        var element = document.getElementById(elem);
        element.innerHTML = secs + " seconds remaining, hurry!";

        // If time falls to 0
        if (secs < 1) {
            clearTimeout(timer);
            element.innerHTML = '<h2>Game Over! <br> Better luck next time!';
        }
        secs--;
        var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
    }
}
// When user chooses the correct answer, record.
// var element = document.getElementById("scoreCount");
// element.innerHTML = "Your Score: " + score;

// function ScoreFunction() {
//     $("#scoreCount").append(score) + " Points"

function answerChecker() {
    for (i = 0; i < correctArray.length; i++) {
        correctArray[i].onclick;

    }
    var userChoice = $(correctArray[i]).onclick;
    console.log(userChoice);

    // Correct Answer Array
    var correctArray = [
        { answer1: "#answer1" },
        { answer2: "#answer2" },
        { answer3: "#answer3" },
        { answer4: "#answer4" }
    ]

    if (correctArray[0].onclick === true) {
        console.log("score");
    }
}

answerChecker();


// var score = 0;
// parseInt(score);

// $(".q1Choices").ready(function () {
//     $("#answer1").click(function () {
//         $("#scoreCount").append(score)
//         parseInt("#scoreCount");
//         console.log("Correct!", score)
//     });
// });

// $(".q2Choices").ready(function () {
//     $("#answer2").click(function () {
//         score++;
//         console.log("Correct!", score)
//     });
// });

// $(".q3Choices").ready(function () {
//     $("#answer3").click(function () {
//         score++;
//         console.log("Correct!", score)
//     });
// });

// $(".q4Choices").ready(function () {
//     $("#answer4").click(function () {
//         score++;
//         console.log("Correct!", score)
//     });
// });
