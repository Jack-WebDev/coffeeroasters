
let question1 = '___'
let question2 = '___'
let question3 = '___'
let question4 = '___'
let question5 = '___'



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
  option.classList.toggle('active')
}

function handleQuestion(e) {
  const question = Number(e.currentTarget.dataset.question);
}

function handleChoices(e) {
    const currentItem = Number(e.currentTarget.dataset.item)
    const coffeeOption = e.currentTarget;
    const currentOption = e.currentTarget.dataset.option;
    // console.log(currentOption)

    switch (currentItem) {
        case 1:
            question1 = currentOption
            break;
        case 2:
            question2 = currentOption
            break;
        case 3:
            question3 = currentOption
            break;
        case 4:
            question4 = currentOption
            break;
        case 5:
            question5 = currentOption
            break;
        default:
            break;
    }


    let orderSummary = 
    `"I drink my coffee ${question1 === "Capsule" ? "using" : "as"} 
        <span>${question1}</span>, 
        with a <span>${question2}</span> ${grindOption()} type bean. 
        <span>${question3}</span>sent to me 
        <span>${question5}</span>."
    `

    // console.log(question3)

    document.querySelector('[data-order]').innerHTML = orderSummary;
}


// function capsuleOption() {
//     if(question1 === "")
// }


function grindOption() {
    if(question1 === "Capsule") {
        console.log(question1)
        return ''
    }
    else {
        return `ground ala <span id="question4">${question4}</span>`
    }
}


