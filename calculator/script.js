function getHistory() {
  return document.getElementById("history-value");
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  document.getElementById("output-value").innerText = num;
}

var operators = ["%", "/", "+", "-", "*"];
var resetNext = false;
var buttons = document.getElementsByClassName("number");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var id = this.id;
    var output = getOutput();

    if (id === "clear") {
      clearDisplay();
    } else if (id === "backspace") {
      backspace();
    } else if (id === "=") {
      calculateResult();
    } else {
      appendToOutput(id);
    }
  });
}

function clearDisplay() {
  printHistory("");
  printOutput("");
}

function backspace() {
  var output = getOutput();
  if (output) {
    printOutput(output.slice(0, -1));
  }
}

function calculateResult() {
  try {
    var output = getOutput();
    if (output && !resetNext) {
      var result = eval(output);
      printOutput(result);
      printHistory(output);
    } else {
      resetNext = false;
      clearDisplay();
    }
  } catch (error) {
    clearDisplay();
    printOutput("NaN");
  }
}

function appendToOutput(value) {
  var output = getOutput();
  if (resetNext || output === "NaN") {
    if (!operators.includes(value)) {
      output = value;
    } else {
      output += value;
    }
    resetNext = false;
  } else {
    output += value;
  }
  printOutput(output);
}