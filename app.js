const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#btn-check");
const result = document.querySelector("#result");

function getSum(dob){
    dob = dob.replaceAll("-", "")
    var sum = 0;
    for(var i = 0; i < dob.length; i++){
        sum += Number(dob.charAt(i))
    }
    return sum
}
function checkLucky(){
    const sumOfDigits = getSum(dateOfBirth.value);
    var isLucky = sumOfDigits % luckyNumber.value;
    if(dateOfBirth.value && luckyNumber.value){
        if(isLucky === 0) 
            result.innerText = "Wow!! Your Birthday is Lucky";
        else
            result.innerText = "Ohh!! Your Birthday is Not Lucky";
    }
    else
        result.innerText = "You need to enter both values";
    
}

checkButton.addEventListener('click', checkLucky);