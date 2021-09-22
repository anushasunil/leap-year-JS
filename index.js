var userInputYear = document.querySelector("#userInputYear");
var btnCheck = document.querySelector(".check");
var outputMessage = document.querySelector(".result");


function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }

    if (year % 100 === 0) {
        return false;
    }

    if (year % 4 === 0) {
        return true;
    }

    return false;
}

function printResult(result) {
    if (result) {
        return (userInputYear.value + " is a leap year");
    } else {
        return (userInputYear.value + " is not a leap year");
    }
}

btnCheck.addEventListener("click", function clickHandler() {
    console.log(userInputYear.value);

    if (userInputYear.value != "" && userInputYear.value > 0) {
        outputMessage.innerText = printResult(isLeapYear(userInputYear.value));
    } else {
        outputMessage.innerText = "please enter a valid input"
    }


});