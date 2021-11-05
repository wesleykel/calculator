let firstNum = [];
let secondNum = [];

let numberButtons = document.getElementsByClassName("number");

const equalBtn = document
  .getElementById("equal")
  .addEventListener("click", equals);

const plusButton = document
  .getElementById("plusnet")
  .addEventListener("click", add);

let topScreen = document.getElementById("line1");
let midScreen = document.getElementById("line2");
let firstBox = document.createElement("div");
let symBox2 = document.createElement("div");

let arrayNumber;
function getButton() {
  topScreen.appendChild(firstBox);
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function (e) {
      console.log(numberButtons[i].dataset.value);
      firstNum.push(parseInt(numberButtons[i].dataset.value));
      firstBox.innerText = firstNum.join("");

      arrayNumber = Number(firstNum.join(""));
      //console.log(arrayNumber);
    };
  }
  return arrayNumber;
}

let arrayNumber2;

function add() {
  let symBox = document.createElement("div");
  topScreen.appendChild(symBox);
  topScreen.appendChild(symBox2);
  let firstNumber = getButton();
  symBox.innerText = "+";
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = function (e) {
      secondNum.push(parseInt(numberButtons[i].dataset.value));
      arrayNumber2 = Number(secondNum.join(""));

      symBox2.innerText = arrayNumber2;
    };
  }

  return firstNumber + arrayNumber2;
}

function equals() {
  if (symBox.innerText === "+") {
    let answer = add();
    console.log(answer);
    midScreen.innerText = answer;
  }
}

getButton();
