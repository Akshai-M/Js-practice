// JavaScript code for creating and appending an element
let Ele = document.createElement('h1');
Ele.textContent = "Hello World!";
let child = document.getElementById("myContainer");
child.appendChild(Ele);
