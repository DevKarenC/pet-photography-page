import appendHeader from "./modules/header";
import home from "./modules/home";
import pricing from "./modules/pricing";

const contentDiv = document.querySelector("#content");
// contentDiv.append(appendHeader(), home());
contentDiv.append(appendHeader(), pricing());
