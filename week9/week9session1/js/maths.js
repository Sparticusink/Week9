var choice = parseInt(prompt("Enter 1 to Multiply Enter 2 : Divide  Enter 3 : Add Enter 4 subtract : Enter 0 to exit"));
var result;
var number1 = 0;
var number2 = 0;
//var message = " enter number between 1 and 4 " ;
//var message2 = " this is a negative number " ;

// while( number1 <1 || number1 > 10 && number2 < 1 || number2 > 10)
//{

//var number1 = parseInt(prompt(" Please enter the first number 1 "));
//var number2 = parseInt(prompt(" Please enter second number 2 "));
//}

//if ( number1 >=1 || number1 <= 10 && number2 >=1 || number2 <=10)
//{
//var choice = parseInt(prompt ("Enter 1 to Multiply Enter 2 : Divide  Enter 3 : Add Enter 4 subtract  : Add 0 to exit " ));

//}

while (choice < 1 || choice > 4) {
    (
        choice = parseInt(prompt("Enter 1 to Multiply Enter 2 : Divide  Enter 3 : Add Enter 4 subtract "))
    )
}

if (choice >= 1 && choice <= 4) {
    number1 = parseInt(prompt(" Please enter the first number 1 "));
    number2 = parseInt(prompt(" Please enter second number 2 "));
}



if (choice == 1) {
    result = number1 * number2
    document.write("Your result is: " + result);
}
else if (choice == 2) {
    result = number1 / number2
    document.write("Your result is: " + result);
}
else if (choice == 3) {
    result = number1 + number2
    document.write("Your result is: " + result);
}
else if (choice == 4) {
    result = number1 - number2
    document.write("Your result is: " + result);
}
//else
//{
//document.write("imput valid number");
//}

//if (result<0)
//{
//document.write("<br>Your result is a negative number</br>")
//}









