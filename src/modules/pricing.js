function pricing() {
  const pricingDiv = document.createElement("div");
  const prices = document.createElement("p");
  const indoorPrice = document.createElement("span");
  const outdoorPrice = document.createElement("span");
  const offerText = document.createElement("p");

  offerText.textContent = "What We Offer";
  indoorPrice.textContent = "Indoor Studios $499";
  outdoorPrice.textContent = "Outdoors $599";
  prices.append(indoorPrice, outdoorPrice);
  prices.classList.add("prices");
  pricingDiv.classList.add("pricing");
  pricingDiv.append(offerText, createCard(), prices);
  return pricingDiv;
}

function createCard() {
  const offer = document.createElement("div");
  const offerListWithImages = {
    "good-doggy.svg": "Lively and dedicated photo session up to 2 hours",
    "dog-treat.svg": "Various toys, treats, and costumes for your pet",
    "samples.svg": "Quality samples of photos for your best decision",
    "online-gallery.svg": "Private, online gallery with 100 best images",
    "camera.svg": "Seven professional photo prints with digital copies",
    "memories.svg": "Lasting memories and adding colors to your moments",
  };
  offer.classList.add("offer");
  for (const imgSource in offerListWithImages) {
    const card = document.createElement("div");
    const cardImg = `<img src="../src/images/${imgSource}" />`;
    const cardDesc = `<p>${offerListWithImages[imgSource]}</p>`;
    card.innerHTML += cardImg;
    card.innerHTML += cardDesc;
    card.classList.add("card");
    offer.append(card);
  }
  return offer;
  //   offer.innerHTML += offerList.map((item) => `<li>${item}</li>`).join("");
}

export default pricing;
