let inputElement = document.querySelector(".userInput");
let btnConvert = document.querySelector(".convert");
let display = document.querySelector(".display");

function convertStringToNumber() {
  let userInput = inputElement.value;
  try {
    let convertedToNumber = parseInt(userInput);
    if (isNaN(convertedToNumber)) {
      throw "Invalid number";
    } else {
      display.textContent = convertedToNumber;
      return convertedToNumber;
    }
  } catch (error) {
    display.textContent = error;
  }
}

btnConvert.addEventListener("click", convertStringToNumber);
