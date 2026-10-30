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

// boolean toggle variables for each examples that need it - if true, show the text, if false, hide the text
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
  // toggle logic being set by changing the state of the toggle variable - if wasn't toggled before (false), set toggled to true, so now when the method is called and toggled is true, show the content. similarly if it was toggled before (true), set toggled to false, so now when the method is called toggled is no false, do not show the content as expected - this same pattern repeats in many methods below with the same logic
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

  outputLengthText.textContent =
    "'" + text + "'" + " has " + length + " characters!";
}

// passing in checkbox to determine when it is checked or not and do things accordingly
function changePassword(checkbox) {
  if (checkbox.checked) {
    // changing type of text in textfield to show or hide password
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
