var userInputYear = document.querySelector("#userInputYear").value;
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
        return (userInputYear,"is a leap year");
    } else {
        return (userInputYear, "is not a leap year");
    }
}

btnCheck.addEventListener("click", function clickHandler() {
    console.log(userInputYear);

    outputMessage.innerText = printResult(isLeapYear(userInputYear));
});