
var output = [];

var number = 1;

while (number <= 100){
    if (number%3 == 0  && number%5 == 0){
        output.push("Fizzbuzz");
    }
    else if(number%3 == 0){
        output.push("Fizz");
    }
    else if(number%5 == 0){
        output.push("Buzz");
    }
    else {
        output.push(number);
    }
    number++;
}
console.log(output);