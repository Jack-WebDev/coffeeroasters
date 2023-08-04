let question1 = "___";
let question2 = "___";
let question3 = "___";
let question4 = "___";
let question5 = "___";

let weeklyPrice = 0.0;
let biweeklyPrice = 0.0;
let monthlyPrice = 0.0;

const choices = document.querySelectorAll("[data-option]");
const items = document.querySelectorAll("[data-item]");
const questions = document.querySelectorAll("[data-question]");

questions.forEach((question) => {
  question.addEventListener("click", handleQuestion);
  question.addEventListener("click", toggleOption);
});

choices.forEach((choice) => {
  choice.addEventListener("click", handleChoices);
});

function toggleOption(e) {
  const option = e.currentTarget;
  option.classList.toggle("active");
}

function handleQuestion(e) {
  const question = Number(e.currentTarget.dataset.question);
}

function handleChoices(e) {
  const currentItem = Number(e.currentTarget.dataset.item);
  const coffeeOption = e.currentTarget;
  const currentOption = e.currentTarget.dataset.option;
  // console.log(currentOption)

  switch (currentItem) {
    case 1:
      question1 = currentOption;
      break;
    case 2:
      question2 = currentOption;
      break;
    case 3:
      question3 = currentOption;
      break;
    case 4:
      question4 = currentOption;
      break;
    case 5:
      question5 = currentOption;
      break;
    default:
      break;
  }

  let orderSummary = `"I drink my coffee ${
    question1 === "Capsule" ? "using" : "as"
  } 
        <span>${question1}</span>, 
        with a <span>${question2}</span> ${grindOption()} type bean. 
        <span>${question3}</span>sent to me 
        <span>${question5}</span>."
    `;

  // console.log(question3)
  capsuleOption();
  document.querySelector("[data-order]").innerHTML = orderSummary;
}

function capsuleOption() {
  if (question1 === "Capsule") {
    document.querySelector(".grind").style.color = "#adb5bd";
    document.querySelector(".grind").style.pointerEvents = "none";
  } else {
    document.querySelector(".grind").style.color = "#000";
    document.querySelector(".grind").style.pointerEvents = "auto";

  }
}

function grindOption() {
  if (question1 === "Capsule") {
    console.log(question1);
    return "";
  } else {
    return `ground ala <span id="question4">${question4}</span>`;
  }
}

function prices() {
  switch (question3) {
    case "250g":
      weeklyPrice = 7.2;
      biweeklyPrice = 9.6;
      monthlyPrice = 12.0;
      break;
    case "500":
      weeklyPrice = 7.2;
      biweeklyPrice = 9.6;
      monthlyPrice = 12.0;
      break;
    case "1000g":
      weeklyPrice = 7.2;
      biweeklyPrice = 9.6;
      monthlyPrice = 12.0;
      break;
    default:
      break;
  }
}

function calcPrice() {
  if (question5 === "weekly") {
    totalPrice = weeklyPrice * 4;
  } else if (question5 === "biweekly") {
    totalPrice = biweeklyPrice * 2;
  } else {
    totalPrice = monthlyPrice * 1;
  }
}
