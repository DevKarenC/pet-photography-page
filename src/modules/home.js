function home() {
  const homeText = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const span = document.createElement("span");

  h2.textContent = "A Flawless Moment.";
  span.textContent = "Book a session today.";
  p.textContent =
    "We help you capture moments from today and create memories for a lifetime with your pet. Over 500 memories captured. Let your pet's true colors shine through. ";
  p.append(span);
  homeText.classList.add("home-text");
  homeText.append(h2, p);
  return homeText;
}

export default home;
