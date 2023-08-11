let question1 = "___";
let question2 = "___";
let question3 = "___";
let question4 = "___";
let question5 = "___";

let weeklyPrice = 0.0;
let biweeklyPrice = 0.0;
let monthlyPrice = 0.0;
let totalPrice = 0.0;

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open__modal");
const closeModal = document.querySelector(".close__modal");
openModal.addEventListener("click", () => {
  modal.showModal();
  calcPrice();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

const weeklyPrices = document.querySelector(".price__week");
const biweeklyPrices = document.querySelector(".price__biWeek");
const monthlyPrices = document.querySelector(".price__month");

const totalFee = document.getElementById("totalFee");

const choices = document.querySelectorAll("[data-option]");
const items = document.querySelectorAll("[data-item]");
const questions = document.querySelectorAll("[data-question]");

questions.forEach((question) => {
  question.addEventListener("click", toggleOption);
});

choices.forEach((choice) => {
  choice.addEventListener("click", handleChoices);
});

function toggleOption(e) {
  const question = e.currentTarget;
  choices.forEach((choice) => {
    if (question === Number(choice.dataset.item)) {
      choice.classList.toggle("active");
    }
  });
  question.classList.add("active");
}


function handleChoices(e) {
  const currentItem = Number(e.currentTarget.dataset.item);
  const coffeeOption = e.currentTarget;
  const currentOption = e.currentTarget.dataset.option;

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

  choices.forEach((choice) => {
    if (currentItem === Number(choice.dataset.item)) {
      choice.classList.remove("active");
    }
  });
  coffeeOption.classList.toggle("active");

  let orderSummary = `"I drink my coffee ${
    question1 === "Capsules" ? "using" : "as"
  } 
        <span style="color:#0e8784; font-weight:900;">${question1}</span>, 
        with a <span style="color:#0e8784;font-weight:900;">${question2} </span> ${grindOption()} type bean. 
        <span style="color:#0e8784;font-weight:900;">${question3}</span> sent to me 
        <span style="color:#0e8784;font-weight:900;">${question5}</span>."
    `;

    

  capsuleOption();
  document.querySelector("[data-order]").innerHTML = orderSummary;
  document.querySelector(".finalOrder__details").innerHTML = orderSummary;
  prices();
}

function capsuleOption() {
  if (question1 === "Capsules") {
    document.querySelector(".grind").style.color = "#adb5bd";
    document.querySelector(".grind").style.pointerEvents = "none";
  } else {
    document.querySelector(".grind").style.color = "#000";
    document.querySelector(".grind").style.pointerEvents = "auto";
  }
}

function grindOption() {
  if (question1 === "Capsules") {
    return "";
  } else {
    return `ground ala <span id="question4" style="color:#0e8784;font-weight:900;">${question4}</span>`;
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
      weeklyPrice = 13.0;
      biweeklyPrice = 17.5;
      monthlyPrice = 22.0;
      break;
    case "1000g":
      weeklyPrice = 22.0;
      biweeklyPrice = 32.0;
      monthlyPrice = 42.0;
      break;
    default:
      break;
  }

  weeklyPrices.innerText = `R${weeklyPrice.toFixed(
    2
  )} per shipment. Includes free first-class shipping.`;
  biweeklyPrices.innerText = `R${biweeklyPrice.toFixed(
    2
  )} per shipment. Includes free first-class shipping.`;
  monthlyPrices.innerText = `R${monthlyPrice.toFixed(
    2
  )} per shipment. Includes free first-class shipping.`;
}

function calcPrice() {
  switch (question5) {
    case "Every week":
      totalPrice = weeklyPrice * 4;
      break;
    case "Every 2 weeks":
      totalPrice = biweeklyPrice * 2;
      break;
    case "Every month":
      totalPrice = monthlyPrice * 1;
      break;
    default:
      break;
  }

  totalFee.innerText = `Your total payment: ${totalPrice.toFixed(2)} / mo.`;
}
