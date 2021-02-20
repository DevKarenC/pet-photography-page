import appendHeader from "./modules/header";
import home from "./modules/home";

const contentDiv = document.querySelector("#content");
contentDiv.append(appendHeader(), home());
// contentDiv.append(appendHeader());
