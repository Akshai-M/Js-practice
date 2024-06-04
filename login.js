let name1 = document.getElementById("name");
let name2 = document.getElementById("text1");
function greetings() {
    let name3 = name1.value;
    let name4 = `Welcome ${name3} to the store`;
    // let name4 = "Welcome " + name3 + "to the store";
    name2.textContent = name4;
}

