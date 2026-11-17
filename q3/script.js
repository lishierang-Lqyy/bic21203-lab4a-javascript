const generateButton = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Clear existing items so repeated clicks do not duplicate the list
  numberList.textContent = "";

  // Use a for loop from 1 through 5
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${i}`;
    numberList.appendChild(listItem);
  }
}

generateButton.addEventListener("click", generateNumbers);