let val1 = document.getElementById('value1');
let val2 = document.getElementById('value2');
let input = document.getElementById('userinput');
let res = document.getElementById('result');

let v1 = Math.ceil(Math.random() * 100);
val1.textContent = v1;

let v2 = Math.ceil(Math.random() * 100);
val2.textContent = v2;

function check() {
    try {
        let v3 = v1 + v2;
        let userAnswer = parseInt(input.value, 10); // Convert input value to an integer
        input.value = ""; // Clear the input field after reading the value

        if (isNaN(userAnswer)) {
            throw new Error("Invalid input. Please enter a number.");
        }

        if (userAnswer === v3) {
            res.textContent = "Nice";
        } else {
            res.textContent = "Try again";
        }
    } catch (error) {
        res.textContent = "Error: " + error.message;
    }
}

function Restart() {
    check();
}