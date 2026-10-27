const greetingDiv = document.getElementById("greeting-output");
const imageDiv = document.getElementById("greeting-image");

const buttonClickText = document.getElementById("buttonClickText");
const buttonClickDate = document.getElementById("buttonClickDate");

const textField1 = document.getElementById("number1");
const textField2 = document.getElementById("number2");
const buttonSumText = document.getElementById("buttonSumText");

const buttonText = document.getElementById("textButton");
const buttonDate = document.getElementById("dateButton");

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let toggledText = false;
let toggledDate = false;

function setGreeting() {
  let now = new Date(); // built in class in Javascript

  console.log(now);

  let hours = now.getHours();

  if (hours >= 0 && hours < 12) {
    imageDiv.textContent = "☀️";
    greetingDiv.textContent = "Good morning!";
  } else if (hours >= 12 && hours < 18) {
    imageDiv.textContent = "⛅";
    greetingDiv.textContent = "Good afternoon!";
  } else {
    imageDiv.textContent = "🌙";
    greetingDiv.textContent = "Good night!";
  }
}

function setButtonText() {
  toggledText = !toggledText;

  if (toggledText) {
    buttonClickText.textContent = "Hello world!";

    buttonText.textContent = "Hide";
  } else {
    buttonClickText.textContent = "";

    buttonText.textContent = "Click Me!";
  }
}

function setButtonDate() {
  toggledDate = !toggledDate;

  let now = new Date();

  if (toggledDate) {
    buttonClickDate.textContent =
      "" +
      dayNames[now.getDay() - 1] +
      ", " +
      monthNames[now.getMonth()] +
      " " +
      now.getDate() +
      ", " +
      now.getFullYear();

    buttonDate.textContent = "Hide";
  } else {
    buttonClickDate.textContent = "";
    buttonDate.textContent = "Date?";
  }
}

function findSum() {
  let input1 = textField1.value;
  let num1 = parseInt(input1);

  let input2 = textField2.value;
  let num2 = parseInt(input2);

  let sum = num1 + num2;

  buttonSumText.textContent = sum;
}

window.onload = function () {
  setGreeting();
};
