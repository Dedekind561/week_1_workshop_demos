import getData from './data.js';
const user = getData()[0];
console.log(user);
// build a card for a single user
const template = document.getElementById('user-card-template');
const card = template === null || template === void 0 ? void 0 : template.content.cloneNode(true);
if (card === null) {
    throw new Error('card must be defined');
}
card.querySelector('h1').textContent = user.name;
card.querySelector('.phone').textContent = `Phone: ${user.phone}`;
card.querySelector('.address').textContent = `Address: ${user.address}`;
card.querySelector('.email').textContent = `Email: ${user.email}`;
const gallery = document.querySelector('.main-gallery');
gallery === null || gallery === void 0 ? void 0 : gallery.appendChild(card);
// make a section element for the card
// make a heading
// add the section to our page
