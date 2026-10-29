const greetingDiv = document.getElementById("greeting-output");
const imageDiv = document.getElementById("greeting-image");

const buttonClickText = document.getElementById("buttonClickText");
const buttonClickDate = document.getElementById("buttonClickDate");

const textField1 = document.getElementById("number1");
const textField2 = document.getElementById("number2");
const buttonSumText = document.getElementById("buttonSumText");

const buttonText = document.getElementById("textButton");
const buttonDate = document.getElementById("dateButton");

const outputLengthText = document.getElementById("outputLengthText");
const enterPassField = document.getElementById("enterPass");
const changeTextParagraph = document.getElementById("changeText");
const changeTextButton = document.getElementById("changeTextButton");
const moodyText = document.getElementById("moodyText");
const toggleDisplayButton = document.getElementById("toggleDisplayButton");
const checkLabel = document.getElementById("checkLabel");

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
let toggledColorText = false;
let toggledMoody = false;

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

function findLength() {
  let text = document.getElementById("enterText").value;
  let length = text.length;

  outputLengthText.textContent = text + " has " + length + " characters!";
}

function changePassword(checkbox) {
  if (checkbox.checked) {
    enterPassField.type = "text";
    checkLabel.textContent = "Hide Password";
  } else {
    enterPassField.type = "password";
    checkLabel.textContent = "Show Password";
  }
}

function changeText() {
  toggledColorText = !toggledColorText;

  if (toggledColorText) {
    changeTextParagraph.classList.add("changedText");
    changeTextButton.textContent = "Hide";
  } else {
    changeTextParagraph.classList.remove("changedText");
    changeTextButton.textContent = "Click Me!";
  }
}

function toggleDisplay() {
  toggledMoody = !toggledMoody;

  if (toggledMoody) {
    moodyText.textContent = "This is a moody message!";
    toggleDisplayButton.textContent = "Hide";
  } else {
    moodyText.textContent = "";
    toggleDisplayButton.textContent = "Toggle Display!";
  }
}

window.onload = function () {
  setGreeting();
};
