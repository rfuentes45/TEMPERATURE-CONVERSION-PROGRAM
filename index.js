// were going to create a temperature conversion program using html, css, js

// we need a function to perform the conversions

// WE WILL FIRST DECLARE ALL THE CONSTANTS AND VARIABLES WE'LL NEED

// THESE ARE THE CONSTANTS WE DO FIRST WHICH WE GET FROM THE ID'S IN 
// THE HTML PAGE IN CHRONOLOGICAL ORDER
// DONT FORGET THE QUOTES IN THE PARANTHESIS
// THESE ARE ALL THE ID'S WE MADE IN HTML, DONT FORGET


const textbox = document.getElementById('textbox')
const toFahrenheit = document.getElementById('toFahrenheit')
const toCelsius = document.getElementById('toCelsius')
const result = document.getElementById('result')
let temp; 

function convert(){ // THE RESULT.TEXTCONTENT IS WHAT WILL POP UP WHEN YOU CLICK BUTTON
    if(toFahrenheit.checked){ //THIS IS C TO F
        temp = Number(textbox.value); //the NUMBER IS SO WE CAN DO THE MATH FROM VALUE ENTERED
        temp = temp * 9 / 5 + 32; // (equation)HOLD OPTION + SHIFT + 8 FOR DEGREE SYMBOL
        result.textContent = temp.toFixed(1) + '°F'
    }
    else if(toCelsius.checked){ // THIS IS TO CONVERT F TO C WHEN YOU ENTER ANY #
        temp = Number(textbox.value); // THIS IS F TO C 
        temp = (temp - 32) * (5 / 9); // equation
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{ // WE DID THIS BECAUSE IF WE JUST CLICK SUBMIT, IT'LL SAY SELECT A UNIT, THATS WHAT TEXT.CONTEXT IS
        result.textContent = 'Select a unit'
    }
}