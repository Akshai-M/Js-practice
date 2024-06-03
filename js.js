// Getting the element by id "Value" corrected
let element1 = document.getElementById("Value");

function Decre() {
    let val1 = element1.textContent;
    let val = parseInt(val1) - 1;
    element1.textContent = val; // Update the text content
    if (val < 0) {
        element1.style.color = "red"; // Corrected the variable name to element1
    }
}

function Reset() {
    element1.textContent = "0"; // Reset the counter to 0
    element1.style.color = "black"; // Reset the color to black
}

function Incre() {
    let val1 = element1.textContent;
    let val = parseInt(val1) + 1;
    element1.textContent = val; 
    if (val > 0){// Update the text content
    element1.style.color = "green"; // Reset the color to black
    }
}