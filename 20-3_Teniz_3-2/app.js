let number = {
    numbers : prompt("введите число :"),
    numbers1 : prompt("введите число :")
}
let math = prompt("+,-,*,/ : ?")
switch (number, math){
    case "+":
        result = number.numbers + number.numbers1
        console.log(result);
        break;
    case "-":
        result = number.numbers - number.numbers1
        console.log(result);
        break;
    case "*":
        result = number.numbers * number.numbers1
        console.log(result);
        break;
    case "/":
        result = number.numbers / number.numbers1
        console.log(result);
        break;
}