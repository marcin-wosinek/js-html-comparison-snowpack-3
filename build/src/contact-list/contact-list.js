import template from "./contact-list.htm.js";
import contacts from "./data.json.proxy.js";

const contactList = document.createElement("div");

contactList.className = "contact-list";

contacts.forEach((entry) => {
  const element = document.createElement("div");
  element.className = "contact";

  element.innerHTML = template;

  element.querySelector(".name").innerHTML = entry.name;
  element.querySelector(".phone").innerHTML = entry.phone;

  contactList.appendChild(element);
});

document.body.appendChild(contactList);
