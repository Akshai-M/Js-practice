// Create a new checkbox input
let cb = document.createElement("input");
cb.type = 'checkbox';
cb.id = 'newcb';

// Create a new label for the checkbox
let cbLabel = document.createElement("label");
cbLabel.setAttribute("for","Checkbox");
cbLabel.textContent = 'New CheckBox';

// Append the checkbox and label to the body
document.body.appendChild(cb);
document.body.appendChild(cbLabel);
