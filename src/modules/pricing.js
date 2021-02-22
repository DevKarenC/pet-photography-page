function pricing() {
  const pricingDiv = document.createElement("div");
  const prices = document.createElement("p");
  const offerText = document.createElement("p");
  offerText.textContent = "WHAT WE OFFER";

  prices.classList.add("prices");
  pricingDiv.classList.add("pricing");
  pricingDiv.append(offerText, createCard(), priceButtons());
  return pricingDiv;
}

function createCard() {
  const offerDiv = document.createElement("div");
  const offerList = [
    "Lively and dedicated photo session up to 2 hours",
    "Various toys, treats, and costumes for your pet",
    "Quality samples of photos for your best decision",
    "Private, online gallery with 100 best images",
    "Seven professional photo prints with digital copies",
    "Lasting memories and adding colors to your moments",
  ];
  offerDiv.classList.add("offer-div");
  offerList.forEach((offer) => {
    const offerLineDiv = document.createElement("div");
    const offerLineP = document.createElement("p");
    offerLineP.textContent = offer;
    offerLineP.classList.add("offer-line-para");
    offerLineDiv.append(offerLineP);
    offerLineDiv.classList.add("offer-line-div");
    offerDiv.append(offerLineDiv);
  });
  return offerDiv;
}

function priceButtons() {
  const buttonsDiv = document.createElement("div");
  const price = document.createElement("button");

  price.textContent = "$499 per session";
  price.classList.add("price-button");
  buttonsDiv.classList.add("buttons-div");
  buttonsDiv.append(price);

  return buttonsDiv;
}

export default pricing;
