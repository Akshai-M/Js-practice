let textarea = document.getElementById('textarea');
let butt = document.getElementById('butt');

butt.onclick = function() {
 let enteredText = textarea.value;
 localStorage.setItem("EnteredText", enteredText);
alert("Submitted the response");
}

let getItem = localStorage.getItem('EnteredText');

if(getItem === "null") {
    textarea.value = " ";
}
else {
    textarea.value = getItem;
}

