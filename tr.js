var insertButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  delButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(input.value + " "));
  li.addEventListener("click", addClickable);
  li.appendChild(delButton);
  delButton.addEventListener("click", deleteItem);
  ul.appendChild(li);
  input.value = "";
}

function addClickable() {
    this.classList.toggle("done");
}

function deleteItem() {
    var li = this.parentNode;
    li.parentNode.removeChild(li);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeypress(press) {
  if (inputLength() > 0 && press.keyCode === 13) {
    createListElement();
  }
}


insertButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
