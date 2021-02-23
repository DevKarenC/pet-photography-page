import appendHeader from "./modules/header";
import home from "./modules/home";
import pricing from "./modules/pricing";
import contacts from "./modules/contacts";

const contentDiv = document.querySelector(".content");
const header = appendHeader();
const homePage = home();
const pricingPage = pricing();
const contactPage = contacts();
contentDiv.append(header, homePage);

const tabs = document.querySelectorAll("li");

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTab);
});

function changeTab() {
  if (this.textContent === "HOME") {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(homePage);
    contentDiv.classList.remove("content-pricing");
    contentDiv.classList.add("content");
  } else if (this.textContent === "PRICING") {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(pricingPage);
    contentDiv.classList.remove("content");
    contentDiv.classList.add("content-pricing");
  } else if (this.textContent === "CONTACT") {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(contactPage);
    contentDiv.classList.remove("content", "content-pricing");
  }
}
