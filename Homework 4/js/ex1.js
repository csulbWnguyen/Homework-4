num1 = number(prompt("Please enter a number."));
num2 = number(prompt("Please enter your second number."));
operation = prompt("Please enter an operator to add, subtract, multiply, or divide. +, -, *, or /");

//Using switch to determine the case and what to show. 
switch(operation){
    case "+":
        console.log(`Input is ${num1}, ${num2}, and ${operation}.`);
        console.log(`Output of ${num1} ${operation} ${num2} is `+(num1+num2));
        break;
    case "-":
        console.log(`Input is ${num1}, ${num2}, and ${operation}.`);
        console.log(`Output of ${num1} ${operation} ${num2} is `+(num1-num2));
        break;
    case "*":
        console.log(`Input is ${num1}, ${num2}, and ${operation}.`);
        console.log(`Output of ${num1} ${operation} ${num2} is `+(num1*num2));
        break;
    case "/":
        console.log(`Input is ${num1}, ${num2}, and ${operation}.`);
        console.log(`Output of ${num1} ${operation} ${num2} is `+(num1/num2));
        break;
};  