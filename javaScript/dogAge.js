function dogAgeCalculator() { 
var dogAge = prompt("How old is your Dog?");

var humanAge = (dogAge - 2) * 4 + 21;

alert("Your dogs age in human age is: " + humanAge);
}

dogAgeCalculator();