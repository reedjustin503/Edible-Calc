var gramsOfFlower = prompt('How many Grams of flower are you cooking?') * 1000;
var cupsOfCoconutOil = prompt("How many cups of oil are you using?");
var ouncesOfCoconutOil = cupsOfCoconutOil * 8
// alert("For 1 cup of coconut oil use 7-14G cannabis");
var strainTHC = prompt("What percentage THC is your flower?")*.01;
console.log(strainTHC);
console.log(ouncesOfCoconutOil);
var doseMath = gramsOfFlower * strainTHC / ouncesOfCoconutOil;
var answer = "You will have " + ouncesOfCoconutOil + " Doses." + " Each one of your 1 ounce doses has " + doseMath + "mg of THC";
document.write(answer);
