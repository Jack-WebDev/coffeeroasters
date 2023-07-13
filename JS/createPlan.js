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
      [...accordionControls]
        .filter((h) => h != accordionControl)
        .forEach((h) => h.classList.remove("active"));

      accordionControl.classList.toggle("active");
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
      prefGrindOption(h4);
      prefText(h4);
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

      return h4;
    });
  });
}

function quantity() {
  const accordionContent3 = document.getElementById("content3");
  const content3 = accordionContent3.querySelectorAll(".coffee__option");

  let h4Val;

  content3.forEach((option) => {
    const h4 = option.querySelector("h4").innerText;

    option.addEventListener("click", () => {
      coffeeOptions(content3, option);
      spanID3.innerText = h4;
      h4Val = h4;
      getVal(h4);
    });
  });

  // return h4Val;
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
    const h4 = option.querySelector("h4").innerText;

    option.addEventListener("click", () => {
      coffeeOptions(content5, option);
      spanID5.innerText = h4;
      return h4;
    });
  });
}

function prefGrindOption(x) {
  const grindOption = document.querySelector(".grind");
  const grindSummaryText = document.querySelector(".option4-1");
  const h3 = grindOption.querySelector("h3");

  if (x == "Capsule") {
    h3.style.color = "steelblue";
    h3.style.pointerEvents = "none";
    grindSummaryText.style.display = "none";
    spanID4.style.display = "none";
  } else {
    h3.style.color = "black";
    h3.style.pointerEvents = "auto";
    grindSummaryText.style.display = "inline-block";
    spanID4.style.display = "inline-block";
  }
}

function prefText(params) {
  if (params == "Capsule") {
    spanID1.innerText = `using ${params}`;
  } else {
    spanID1.innerText = `as ${params}`;
  }
}

function deliveryCalc(grams, days) {
  // If 250g weight is selected
  // Every Week price per shipment is $7.20
  // Every 2 Weeks price per shipment is $9.60
  // Every Month price per shipment is $12.00
  if (grams == "250g") {
    switch (days) {
      case "week":
        return 4 * 7.2;
      case "2 weeks":
        return 2 * 9.6;
      case "month":
        return 1 * 12.0;
      default:
        return 0;
    }
  }
  //   If 500g weight is selected
  // Every Week price per shipment is $13.00
  // Every 2 Weeks price per shipment is $17.50
  // Every Month price per shipment is $22.00
  else if (grams == "500g") {
    switch (days) {
      case "week":
        return 4 * 13.0;
      case "2 weeks":
        return 2 * 17.5;
      case "month":
        return 1 * 22.0;
      default:
        return 0;
    }
  } else if (grams == "1000g") {
    //     If 1000g weight is selected
    // Every Week price per shipment is $22.00
    // Every 2 Weeks price per shipment is $32.00
    // Every Month price per shipment is $42.00

    switch (days) {
      case "week":
        return 4 * 22.0;
      case "2 weeks":
        return 2 * 32.0;
      case "month":
        return 1 * 42.0;
      default:
        return 0;
    }
  }
}

// function quantity() {
//   return new Promise((resolve, reject) => {
//     const accordionContent3 = document.getElementById("content3");
//     const content3 = accordionContent3.querySelectorAll(".coffee__option");

//     let h4Val;

//     content3.forEach((option) => {
//       const h4 = option.querySelector("h4").innerText;

//       option.addEventListener("click", () => {
//         coffeeOptions(content3, option);
//         spanID3.innerText = h4;
//         h4Val = h4;
//         resolve(h4Val); // Resolve the Promise with the updated value
//       });
//     });
//   });
// }

// // Usage:
// quantity().then((value) => {
//   console.log(value); // Access the updated value asynchronously
// });

orderAccordion();
preference();
beanType();
q = quantity();
console.log(q);
grindOption();
d = deliveries();
// deliveryCalc(q,d)
