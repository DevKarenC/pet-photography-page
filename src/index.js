import appendHeader from "./modules/header";
import home from "./modules/home";
import pricing from "./modules/pricing";

const contentDiv = document.querySelector(".content");
const header = appendHeader();
const homeDiv = home();
const pricingDiv = pricing();
contentDiv.append(header, homeDiv);

const tabs = document.querySelectorAll("li");
console.log(tabs);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTab);
});

function changeTab() {
  if (this.textContent === "HOME") {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(homeDiv);
    contentDiv.classList.remove("content-pricing", "content-contact");
    contentDiv.classList.add("content");
  } else if (this.textContent === "PRICING") {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(pricingDiv);
    contentDiv.classList.remove("content", "content-contact");
    contentDiv.classList.add("content-pricing");
  }
}

// TODO: Attach event listener to each tab and call corresponding module
// TODO: Also add/remove class for the contentDiv to replace background images
