const inputForm = document.querySelector(".input-form");
const addBtn = document.getElementById("add-btn")
const removeBtn = document.getElementById("remove-btn")

console.log(inputForm);
console.log(addBtn);
console.log(removeBtn);



addBtn.onclick = function(){
    let newField = document.createElement("input");
    newField.setAttribute("type", "text");
    newField.setAttribute("placeholder", "Another Field")
    inputForm.appendChild(newField);
    console.log(newField);
}