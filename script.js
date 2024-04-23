const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let x;
let finalArr = [];

const romanNumerals = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I", 
}

const checkNumInput = () => {
  let number = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(number)) {
    output.innerText = "Please enter a valid number.";
    return;
  }
  else if (number <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1.";
    return;
  }
  else if (number >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999.";
    return;
  } else {  
    numToNumeral(number);
  }
}

const numToNumeral = (num) => {
  output.innerText = "";
  let key;
  let newArr = [];
  if (num === 0) {
          output.innerText = finalArr.join("")
          console.log(finalArr)
          return;
      }

    if (newArr.length === 0){
        for (key in romanNumerals) {
            newArr.push(key)
          }
          newArr.reverse();
    }
  
   for (key in newArr) {
    if (newArr[key] <= num){
        x = newArr[key];
        finalArr.push(romanNumerals[x])
        break;
    }
   }
   num -= x;
   numToNumeral(num)
  }


numberInput.addEventListener("change", () => {
    finalArr = [];
    checkNumInput();
    
    
})
convertBtn.addEventListener("click", () => {
    finalArr = [];
    checkNumInput();
})

