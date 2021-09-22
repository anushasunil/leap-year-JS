var userInputYear = document.querySelector("#userInputYear");
var btnCheck = document.querySelector(".check");
var outputMessage = document.querySelector(".result");


function isLeapYear(year)
{
	if (year % 400 === 0)
	{
        return true;
    }

    if(year % 100 === 0)
    {
        return false;
    }

    if(year % 4 === 0)
    {
        return true;
    }

    return false;
}

function printResult(result)
{
	if(result)
	{
		console.log("is a leap year");
	}
	else{
		console.log("is not a leap year");
	}
}

btnCheck.addEventListener("click", function clickHandler(){

});