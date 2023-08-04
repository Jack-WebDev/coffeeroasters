const choices = document.querySelectorAll("[data-option]");
const items = document.querySelectorAll("[data-item]");
const questions = document.querySelectorAll("[data-question]");

questions.forEach((question) => {
  question.addEventListener("click", handleQuestion);
  question.addEventListener("click", toggleOption);

});


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("Choice clicked");
  });
});

function toggleOption(e) {
  const option = e.currentTarget;
  option.classList.toggle('active')
}

function handleQuestion(e) {
  const question = Number(e.currentTarget.dataset.question);
}
