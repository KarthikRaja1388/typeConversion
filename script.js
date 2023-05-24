function convertStringToNumber(string) {
  try {
    let convertedToNumber = parseInt(string);
    if (isNaN(convertedToNumber)) throw "Invalid number";
    else return convertedToNumber;
  } catch (error) {
    console.log(error);
  }
}

console.log(convertStringToNumber("123"));
