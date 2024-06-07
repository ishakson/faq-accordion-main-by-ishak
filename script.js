const accordion_title = document.querySelectorAll(".accordion-title");
const icon = document.querySelectorAll(".icon");
document.addEventListener("DOMContentLoaded", () => {
    const accordionTitles = document.querySelectorAll(".accordion-title");
  
    accordionTitles.forEach((title) => {
      title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        const icon = title.querySelector("img");
        
        content.classList.toggle("open-box");
  
        if (content.classList.contains("open-box")) {
          icon.src = "assets/images/icon-minus.svg";
        } else {
          icon.src = "assets/images/icon-plus.svg";
        }
      });
    });
  });
  