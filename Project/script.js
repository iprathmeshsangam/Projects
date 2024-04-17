const inputContainer = document.getElementById("input-container");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const inputTag = inputContainer.getElementsByTagName("input")

add.onclick = function () {
    let newField = document.createElement("input");
    newField.setAttribute("type", "text");
    newField.setAttribute("placeholder", "Another Field");
    inputContainer.appendChild(newField);
    if(inputTag.length >= 2){
        remove.style.visibility = "visible"
    }
}

// console.log(inputTag)

remove.onclick = function () {
    if(inputTag.length >= 2){
        inputContainer.removeChild(inputTag[(inputTag.length)-1]);

        if(inputTag.length < 2){
            remove.style.visibility = "hidden";
        }
    }
}
