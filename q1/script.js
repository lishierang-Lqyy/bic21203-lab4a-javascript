// 1. Select the paragraph and button using DOM selection methods
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// 2. Define the function named changeMessage()
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// 3. Attach the function to the button using addEventListener
changeButton.addEventListener("click", changeMessage);