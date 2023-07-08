const accordionControls = document.querySelectorAll(".accordion__control");
const accordionContent1 = document.getElementById("content1");
const accordionContent2 = document.getElementById("content2");
const spanID = document.getElementById("option1");
const spanID2 = document.getElementById("option2");

accordionControls.forEach((accordionControl) => {
  const header = accordionControl.querySelector("h3");
  // const accordionContent = accordionControl.querySelectorAll(
  //   ".accordion__content"
  // );

  // const accordionContent1 = accordionControl.querySelector(".content1");
  // const accordionContent2 = accordionControl.querySelector(".content2");

  header.addEventListener("click", () => {
    header.style.backgroundColor = "Steelblue";
    // toggleContent(accordionContent);
  });

  // console.log(accordionContent1)
  // console.log(accordionContent2)
  // const options1 = accordionContent1.querySelectorAll(".coffee__options");
  // console.log(options1)
  // options1.forEach((option1) => {
  //   option1.addEventListener("click", () => {
  //     const h4 = option1.querySelector("h4");
  //     spanID.innerText = h4.innerText;
  //   });
  // });
  // accordionContent.forEach((content) => {
  //   const options = content.querySelectorAll(".coffee__option");
  //   // console.log(content)

  //   options.forEach((option) => {
  //     // console.log(option)
  //     const h4 = option.querySelector("h4");
  //     // console.log(header.innerText)
  //     option.addEventListener("click", () => {
  //       spanID.innerText = h4.innerText;
  //       // spanID2.innerText = h4.innerText[1];
  //       option.style.backgroundColor = "Steelblue";
  //     });
  //   });
  // });

  // function toggleContent(accordionContent) {
  //   const options = accordionContent.querySelector(".coffee__option");
  //   options.addEventListener("click", () => {
  //     consolXe.log("....");
  //   });
  // }
});


const content1 = accordionContent1.querySelectorAll(".coffee__option")
const content2 = accordionContent2.querySelectorAll(".coffee__option")

// console.log(content1)

content1.forEach((option) => {
  const h4 = option.querySelector("h4")

  option.addEventListener("click", () => {
    option.style.backgroundColor = "Steelblue";
    spanID.innerText = h4.innerText;
  })
})


content2.forEach((option) => {
  const h4 = option.querySelector("h4")

  option.addEventListener("click", () => {
    option.style.backgroundColor = "Steelblue";
    spanID2.innerText = h4.innerText;
  })
})

