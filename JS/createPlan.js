
const btn = document.getElementById("disabled");
const accordionControls = document.querySelectorAll(".accordion__control");
const accordionContent1 = document.getElementById("content1");
const accordionContent2 = document.getElementById("content2");
const accordionContent3 = document.getElementById("content3");
const accordionContent4 = document.getElementById("content4");
const accordionContent5 = document.getElementById("content5");

const spanID1 = document.getElementById("option1");
const spanID2 = document.getElementById("option2");
const spanID3 = document.getElementById("option3");
const spanID4 = document.getElementById("option4");
const spanID5 = document.getElementById("option5");


// btn.disabled = false;


accordionControls.forEach((accordionControl) => {
  const header = accordionControl.querySelector("h3");

  header.addEventListener("click", () => {
    header.style.backgroundColor = "Steelblue";
  });
});

const content1 = accordionContent1.querySelectorAll(".coffee__option");
const content2 = accordionContent2.querySelectorAll(".coffee__option");
const content3 = accordionContent3.querySelectorAll(".coffee__option");
const content4 = accordionContent4.querySelectorAll(".coffee__option");
const content5 = accordionContent5.querySelectorAll(".coffee__option");

// console.log(content1)

content1.forEach((option) => {
  const h4 = option.querySelector("h4").innerText;

  option.addEventListener("click", () => {

    [...content1]
      .filter((op) => op !== option)
      .forEach((o) => o.classList.remove("active"));

    option.classList.toggle("active");
    spanID1.innerText = `as ${h4}`;
  });
});


content2.forEach((option) => {
  const h4 = option.querySelector("h4");

  option.addEventListener("click", () => {
    [...content2]
      .filter((op) => op !== option)
      .forEach((o) => o.classList.remove("active"));

    option.classList.toggle("active");
    spanID2.innerText = h4.innerText;
  });
});


content3.forEach((option) => {
  const h4 = option.querySelector("h4");

  option.addEventListener("click", () => {
    [...content3]
      .filter((op) => op !== option)
      .forEach((o) => o.classList.remove("active"));

    option.classList.toggle("active");
    spanID3.innerText = h4.innerText;
  });
});



content4.forEach((option) => {
  const h4 = option.querySelector("h4");

  option.addEventListener("click", () => {
    [...content4]
      .filter((op) => op !== option)
      .forEach((o) => o.classList.remove("active"));

    option.classList.toggle("active");
    spanID4.innerText = h4.innerText;
  });
});



content5.forEach((option) => {
  const h4 = option.querySelector("h4");

  option.addEventListener("click", () => {
    [...content5]
      .filter((op) => op !== option)
      .forEach((o) => o.classList.remove("active"));

    option.classList.toggle("active");
    spanID5.innerText = h4.innerText;
  });
});




