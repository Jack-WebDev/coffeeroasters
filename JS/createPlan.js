let question1 = "___";
let question2 = "___";
let question3 = "___";
let question4 = "___";
let question5 = "___";

let weeklyPrice = 0.0;
let biweeklyPrice = 0.0;
let monthlyPrice = 0.0;
let totalPrice = 0.0;


const weeklyPrices = document.querySelector('.price__week')
const biweeklyPrices = document.querySelector('.price__biWeek')
const monthlyPrices = document.querySelector('.price__month')
const createBtn = document.querySelector('.create-plan--btn')

const totalFee = document.getElementById('totalFee')


const choices = document.querySelectorAll("[data-option]");
const items = document.querySelectorAll("[data-item]");
const questions = document.querySelectorAll("[data-question]");

createBtn.addEventListener('click', createPlanBtn);
// console.log(createBtn)


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
        with a <span>${question2} </span> ${grindOption()} type bean. 
        <span>${question3}</span>sent to me 
        <span>${question5}</span>."
    `;

  // console.log(question3)
  capsuleOption();
  document.querySelector("[data-order]").innerHTML = orderSummary;
  document.querySelector('.finalOrder__details').innerHTML = orderSummary
  prices()
  // createPlanBtn()
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
    case "500g":
      weeklyPrice = 13.00;
      biweeklyPrice = 17.50;
      monthlyPrice = 22.00;
      break;
    case "1000g":
      weeklyPrice = 22.00;
      biweeklyPrice = 32.00;
      monthlyPrice = 42.00;
      break;
    default:
      break;
  }

  weeklyPrices.innerText = `R${weeklyPrice.toFixed(2)} per shipment. Includes free first-class shipping.`
  biweeklyPrices.innerText = `R${biweeklyPrice.toFixed(2)} per shipment. Includes free first-class shipping.`
  monthlyPrices.innerText = `R${monthlyPrice.toFixed(2)} per shipment. Includes free first-class shipping.`
}

function calcPrice() {

  switch (question5) {
    case "Every week":
      totalPrice = weeklyPrice * 4
      break;
    case "Every 2 weeks":
      totalPrice = biweeklyPrice * 2
      break;
    case "Every month":
      totalPrice = monthlyPrice * 1
      break;
    default:
      break;
  }

  totalFee.innerText = `Your total payment: ${totalPrice.toFixed(2)}.`
}

function createPlanBtn() {
  console.log(".....")

  document.getElementById("order").style.opacity = "1";

  // document.querySelector('.order__summary').style.opacity = "1";

  calcPrice()

}
