function contacts() {
  const contactDiv = document.createElement("div");
  const contactListDiv = document.createElement("div");
  const contactUs = document.createElement("p");
  contactListDiv.append(
    phoneContact(),
    emailContact(),
    locationAddress(),
    businessHours()
  );
  contactUs.textContent = "CONTACT US";
  contactDiv.classList.add("contact-div");
  contactDiv.append(contactUs, contactListDiv);
  return contactDiv;
}

function phoneContact() {
  const phoneNumber = document.createElement("p");
  const phoneIcon = document.createElement("i");
  const phoneDiv = document.createElement("div");
  phoneIcon.classList.add("fas", "fa-phone-alt");
  phoneDiv.classList.add("contact-inner-div");
  phoneNumber.textContent = "746-864-7274";
  phoneDiv.append(phoneIcon, phoneNumber);
  return phoneDiv;
}

function emailContact() {
  const emailAddress = document.createElement("p");
  const emailIcon = document.createElement("i");
  const emailDiv = document.createElement("div");
  emailIcon.classList.add("far", "fa-paper-plane");
  emailDiv.classList.add("contact-inner-div");
  emailAddress.textContent = "yourstruly@petphotography.com";
  emailDiv.append(emailIcon, emailAddress);
  return emailDiv;
}

function locationAddress() {
  const address = document.createElement("p");
  const addressIcon = document.createElement("i");
  const addressDiv = document.createElement("div");
  addressIcon.classList.add("fas", "fa-map-marker-alt");
  addressDiv.classList.add("contact-inner-div");
  address.textContent = "2674 Parrish Avenue, Salinas, CA";
  addressDiv.append(addressIcon, address);
  return addressDiv;
}

function businessHours() {
  const businessHours = document.createElement("p");
  const hoursIcon = document.createElement("i");
  const hoursDiv = document.createElement("div");
  hoursIcon.classList.add("far", "fa-clock");
  hoursDiv.classList.add("contact-inner-div");
  businessHours.textContent = "9AM - 9PM (PST) Monday - Sunday";
  hoursDiv.append(hoursIcon, businessHours);
  return hoursDiv;
}

export default contacts;
