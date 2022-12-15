//Number and Operator Buttons
const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const buttonFive = document.getElementById("five");
const buttonSix = document.getElementById("six");
const buttonSeven = document.getElementById("seven");
const buttonEight = document.getElementById("eight");
const buttonNine = document.getElementById("nine");
const buttonZero = document.getElementById("zero");
const buttonDecimal = document.getElementById("decimal");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");


//Variable for manipulating the text field on the page
const displayField = document.getElementById("displayField");


//Variable for manipulating the log field next to the calculator
const logField = document.getElementById("logField");


//Variable to adjust the actual contents within the text field
let displayContents = "";


//Variable to keep track of the current value of all the operations
let calcData = 0;


//Keeps track of the current chosen operator by the user in order to
//allow use of the equals button in tandem with using the operator buttons
//to execute calculations
let currentOperator = "";

//This variable checks if the display need to be cleared before displaying
//the new working value to avoid concatenating the working value with
//what is displayed
let clearSwitch = false;


//This variable checks if the user input is the first input in order
//to ignore the original zero value of the calcData variable
let firstInput = true;


//Checks if a user added another input before clicking an operand button
//to avoid committing the same calculation over and over again by simply
//pressing the operator button
let newInput = false;


//This will concatenate numbers pressed by the user and store it within 
//the displayContents variable as a string
const numInterface = n =>{
    if(clearSwitch === true){
        displayContents = "";
        clearSwitch = false;
    }
    if(displayContents.length < 15){
        displayContents += n;
        logField.innerHTML += n;
        newInput = true;
    }
    displayField.value = displayContents;
}


//This function runs if firstInput is true, thus avoiding an operation
//against the original value of zero for the calcData variable
const firstInputCheck = () =>{
    calcData = Number(displayContents);
    displayField.value = calcData.toString();
    clearSwitch = true;
    firstInput = false;
    newInput = false;
}


//These functions are the arithmetic operators
const addition = () =>{
    calcData += Number(displayContents);
    displayField.value = calcData;
    clearSwitch = true;
    newInput = false;
}

const subtraction = () =>{
    calcData -= Number(displayContents);
    displayField.value = calcData;
    clearSwitch = true;
    newInput = false;
}

const multiplication = () =>{
    calcData *= Number(displayContents);
    displayField.value = calcData;
    clearSwitch = true;
    newInput = false;
}

const division = () =>{
    calcData /= Number(displayContents);
    displayField.value = calcData;
    clearSwitch = true;
    newInput = false;
}


//Event listeners for each number including decimal
buttonOne.addEventListener("click", ()=>{
    numInterface("1");
});

buttonTwo.addEventListener("click", ()=>{
    numInterface("2");
});

buttonThree.addEventListener("click", ()=>{
    numInterface("3");
});

buttonFour.addEventListener("click", ()=>{
    numInterface("4");
});

buttonFive.addEventListener("click", ()=>{
    numInterface("5");
});

buttonSix.addEventListener("click", ()=>{
    numInterface("6");
});

buttonSeven.addEventListener("click", ()=>{
    numInterface("7");
});

buttonEight.addEventListener("click", ()=>{
    numInterface("8");
});

buttonNine.addEventListener("click", ()=>{
    numInterface("9");
});

buttonZero.addEventListener("click", ()=>{
    numInterface("0");
});

buttonDecimal.addEventListener("click", ()=>{
    numInterface(".");
});


//Event listener that clears display field, returns calcData variable back
//to zero, and resets the first user input check back to true
clear.addEventListener("click", ()=>{
    displayContents = "";
    displayField.value = displayContents;
    calcData = 0;
    firstInput = true;
});


//These are the operator function event listeners. They execute the 
//arithmetic operator fuctions. This will update the current calculated
//value, display the value, and set the switches to allow better usibility
plus.addEventListener("click", ()=>{
    if(firstInput === true && newInput === true){
        firstInputCheck();
        currentOperator = "+";
        logField.innerHTML += " + ";
    }else if(firstInput === false && newInput == true){
        addition();
        currentOperator = "+";
        logField.innerHTML += " + ";
    }else{
        currentOperator = "+";
        logField.innerHTML += calcData + " + ";
    }
});

minus.addEventListener("click", ()=>{
    if(firstInput === true && newInput === true){
        firstInputCheck();
        currentOperator = "-";
        logField.innerHTML += " - ";
    }else if(firstInput === false && newInput == true){
        subtraction();
        currentOperator = "-";
        logField.innerHTML += " - ";
    }else{
        currentOperator = "-";
        logField.innerHTML += calcData + " - ";
    }
});

multiply.addEventListener("click", ()=>{
    if(firstInput === true && newInput === true){
        firstInputCheck();
        currentOperator = "*";
        logField.innerHTML += " * ";
    }else if(firstInput === false && newInput == true){
        multiplication();
        currentOperator = "*";
        logField.innerHTML += " * ";
    }else{
        currentOperator = "*";
        logField.innerHTML += calcData + " * ";
    }
});

divide.addEventListener("click", ()=>{
    if(firstInput === true && newInput === true){
        firstInputCheck();
        currentOperator = "/";
        logField.innerHTML += " / ";
    }else if(firstInput === false && newInput == true){
        division();
        currentOperator = "/";
        logField.innerHTML += " / ";
    }else{
        currentOperator = "/";
        logField.innerHTML += calcData + " / ";
    }
});


equals.addEventListener("click", ()=>{
    if(firstInput === false && newInput === true){
        switch(currentOperator){
            case "+":
                addition();
                logField.innerHTML += "\n= " + calcData + "\n\n";
                break;
            case "-":
                subtraction();
                logField.innerHTML += "\n= " + calcData + "\n\n";
                break;
            case "*":
                multiplication();
                logField.innerHTML += "\n= " + calcData + "\n\n";
                break;
            case "/":
                division();
                logField.innerHTML += "\n= " + calcData + "\n\n";
                break;
            default:
                break;
        }
    }
    logField.scrollTop = logField.scrollHeight;
})