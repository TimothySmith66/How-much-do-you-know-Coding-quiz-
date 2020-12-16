var questionOne = next page


var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

var time=
millisecondsPerWord = parseInt(millisecondsPerWord); // convert string to number

function prepareRead() {
  var timeLeft = 60;

  var timeInterval = setInterval(function() {
    timer.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timer.textContent = "";
      s();
    }

  }, 1000);
}



}

prepareRead();