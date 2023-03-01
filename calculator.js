let result = document.getElementById("result");

function addToDisplay(char) {
  result.value += char;
}

function clearScreen() {
  result.value = "";
}
function deleteChar() {
    result.value=result.value.slice(0,-1);
}

function calculate() {
    result.value = eval(result.value);
}