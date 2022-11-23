let inputString = 
document.getElementById('reverseInput').value;

const originalString = "Hello";

function stringReverse(string){
  const splitString = string.split("");

  console.log(splitString);

  const reverseString = splitString.reverse();

  console.log(reverseString);

  const joinString = reverseString.join("");
  
  return joinString;
}
const printString = stringReverse(inputString);

document.write("Reversed String is: " + printString);