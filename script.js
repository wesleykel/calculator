let firstNum = [];
let secondNum = [];

let numberButtons = document.getElementsByClassName("number");

const equalBtn = document
  .getElementById("equal")
  .addEventListener("click", equals);

const plusButton = document
  .getElementById("plusnet")
  .addEventListener("click", add);

const subtractBtn = document
  .getElementById("minus")
  .addEventListener("click", subtract);

let topScreen = document.getElementById("line1");
let firstBox = document.getElementById("numOne");
let symBox = document.getElementById("symBox");
let symBox2 = document.getElementById("numTwo");
let midScreen = document.getElementById("line2");

let arrayNumber;
function getButton() {
  midScreen.innerText = "0";

  if (midScreen.innerText === "0") {
    for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].onclick = function (e) {
        console.log(numberButtons[i].dataset.value);
        firstNum.push(parseInt(numberButtons[i].dataset.value));
        firstBox.innerText = firstNum.join("");

        arrayNumber = Number(firstNum.join(""));
        localStorage.setItem("number", arrayNumber);
        console.log(arrayNumber);
      };
    }
  } else {
    let answer = equals();
    console.log(answer + "hi  ");
    let returnedAnswer = answer;
    firstBox.innerText = returnedAnswer;
  }
  return arrayNumber;
}

let arrayNumber2;

function add() {
  let numToAdd = parseInt(localStorage.getItem("returnedNumber"));

  if (numToAdd > 0) {
    firstBox.innerText = numToAdd;
    secondNum = [];
  }
  if (firstBox.innerText != "") {
    if (symBox.innerText === "") {
      symBox.innerText = "+";
      for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].onclick = function (e) {
          secondNum.push(parseInt(numberButtons[i].dataset.value));
          arrayNumber2 = Number(secondNum.join(""));
          let secondNumber = localStorage.setItem("secondNumber", arrayNumber2);
          symBox2.innerText = arrayNumber2;
        };
      }
    }
  }
  let numberTo = parseInt(localStorage.getItem("number"));
  localStorage.setItem("returnedNumber", numberTo + arrayNumber2);
  return numberTo + arrayNumber2;
}

function subtract() {
  let firstNumber = getButton();
  if (firstBox.innerText != "") {
    if (symBox.innerText === "") {
      symBox.innerText = "-";
      for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].onclick = function (e) {
          secondNum.push(parseInt(numberButtons[i].dataset.value));
          arrayNumber2 = Number(secondNum.join(""));

          symBox2.innerText = arrayNumber2;
        };
      }
    }
  }
  return firstNumber - arrayNumber2;
}

function equals() {
  if (symBox.innerText === "+") {
    let answer = add();
    console.log(answer);
    midScreen.innerText = answer;
    return answer;
  }
  if (symBox.innerText === "-") {
    let answer = subtract();
    midScreen.innerText = answer;
    return answer;
  }
}

const clearButton = document
  .getElementById("clear")
  .addEventListener("click", clear);
function clear() {
  window.location.reload();
}

getButton();
