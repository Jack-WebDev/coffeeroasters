// const content = document.querySelectorAll(".coffee__option");

const spanID1 = document.getElementById("option1");
const spanID2 = document.getElementById("option2");
const spanID3 = document.getElementById("option3");
const spanID4 = document.getElementById("option4");
const spanID5 = document.getElementById("option5");

function orderAccordion() {
  const accordionControls = document.querySelectorAll(".accordion__control");

  accordionControls.forEach((accordionControl) => {
    const header = accordionControl.querySelector("h3");

    header.addEventListener("click", () => {
      header.style.backgroundColor = "Steelblue";
    });
  });
}

function preference() {
  const accordionContent1 = document.getElementById("content1");
  const content = accordionContent1.querySelectorAll(".coffee__option");

  content.forEach((option) => {
    const h4 = option.querySelector("h4").innerText;
    
    option.addEventListener("click", () => {

      coffeeOptions(content, option);
      spanID1.innerText = `as ${h4}`;

      return h4;
    });

  });
  
}

function coffeeOptions(params, option) {
  [...params]
    .filter((op) => op !== option)
    .forEach((o) => o.classList.remove("active"));

  option.classList.toggle("active");
}

function beanType() {
  const accordionContent2 = document.getElementById("content2");
  const content = accordionContent2.querySelectorAll(".coffee__option");

  content.forEach((option) => {
    const h4 = option.querySelector("h4");

    option.addEventListener("click", () => {
      coffeeOptions(content, option);
      spanID2.innerText = h4.innerText;
    });
  });
}

function quantity() {
  const accordionContent3 = document.getElementById("content3");
  const content3 = accordionContent3.querySelectorAll(".coffee__option");

  content3.forEach((option) => {
    const h4 = option.querySelector("h4");

    option.addEventListener("click", () => {
      coffeeOptions(content3, option);
      spanID3.innerText = h4.innerText;
    });
  });
}

function grindOption() {
  const accordionContent4 = document.getElementById("content4");
  const content4 = accordionContent4.querySelectorAll(".coffee__option");

  content4.forEach((option) => {
    const h4 = option.querySelector("h4");

    option.addEventListener("click", () => {
      coffeeOptions(content4, option);
      spanID4.innerText = h4.innerText;
    });
  });
}

function deliveries() {
  const accordionContent5 = document.getElementById("content5");
  const content5 = accordionContent5.querySelectorAll(".coffee__option");

  content5.forEach((option) => {
    const h4 = option.querySelector("h4");

    option.addEventListener("click", () => {
      coffeeOptions(content5, option);
      spanID5.innerText = h4.innerText;
    });
  });
}

orderAccordion();
console.log(preference());
beanType();
quantity();
grindOption();
deliveries();
