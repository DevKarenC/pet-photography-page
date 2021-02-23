import appendHeader from "./modules/header";
import home from "./modules/home";
import pricing from "./modules/pricing";
import contacts from "./modules/contacts";
import { HOME, PRICING, CONTACT } from "./constants";

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
  const tabName = this.textContent;
  if (tabName === HOME) {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(homePage);
    contentDiv.classList.remove("content-pricing");
    contentDiv.classList.add("content");
  } else if (tabName === PRICING) {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(pricingPage);
    contentDiv.classList.remove("content");
    contentDiv.classList.add("content-pricing");
  } else if (tabName === CONTACT) {
    contentDiv.removeChild(contentDiv.lastChild);
    contentDiv.append(contactPage);
    contentDiv.classList.remove("content", "content-pricing");
  }
}
