function isLeapYear(year) {
    if (isNaN(year)){
        alert("Please only type numbers!");
    }
    else if (year%4 == 0 || year%100 == 0 || year%400 == 0){
        alert("The year " + year + " is a leap  year!");
    }
    else {
        console.log("The year " + year + " is not a leap  year!");
    }
}

isLeapYear(prompt("Give me a random year:"));