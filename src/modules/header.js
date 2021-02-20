function appendHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const tabs = ["HOME", "PRICING", "CONTACT"];

  ul.innerHTML = tabs.map((tab) => `<li>${tab}</li>`).join("");
  nav.append(ul);
  span1.textContent = "YOURS TRULY";
  span2.textContent = "PET PHOTOGRAPHY";
  span1.classList.add("yours-truly");
  span2.classList.add("pet-photography");
  h1.append(span1, span2);
  header.append(h1, nav);
  return header;
}

export default appendHeader;
