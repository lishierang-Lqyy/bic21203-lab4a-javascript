const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();

  // Handle empty/whitespace-only values or non-numeric input
  if (rawValue === "" || Number.isNaN(Number(rawValue))) {
    resultParagraph.textContent = "Please enter a valid number!";
    return;
  }

  const num = Number(rawValue);

  // Compare the valid number against 10 using if...else if...else
  if (num < 10) {
    resultParagraph.textContent = "The number is lower than 10";
  } else if (num > 10) {
    resultParagraph.textContent = "The number is higher than 10";
  } else {
    resultParagraph.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);