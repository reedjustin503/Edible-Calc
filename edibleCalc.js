
var flower,cups,thc;
function getNumbers () {
  flower = Number(document.getElementById("flower").value);
  cups = Number(document.getElementById("cups").value);
  thc = Number(document.getElementById("thc").value);
  cbd = Number(document.getElementById("cbd").value);
}

function getAnswer() {
  getNumbers ();
    var resultthc = ((flower * 1000) * (thc*.01)) / (cups * 8)
    var resultcbd = ((flower * 1000) * (cbd*.01)) / (cups * 8)
      console.log(resultthc, resultcbd);
      function displayPercent () {
          document.write("You have " + resultthc + "mg of THC per 1 ounce dose, and " + resultcbd + "mg of CBD per dose.");
        }
      return displayPercent;
}

var myFunc = getAnswer();
myFunc();
