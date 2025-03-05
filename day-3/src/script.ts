import getData from './data.js';

const user = getData()[0];
console.log(user);

// build a card for a single user

const template = document.getElementById('user-card-template') as HTMLTemplateElement
const card = template?.content.cloneNode(true) as HTMLElement;
if (card === null) {
    throw new Error('card must be defined')
}

card.querySelector('h1')!.textContent = user.name;
card.querySelector('.phone')!.textContent = `Phone: ${user.phone}`;
card.querySelector('.address')!.textContent = `Address: ${user.address}`;
card.querySelector('.email')!.textContent = `Email: ${user.email}`;
const gallery = document.querySelector('.main-gallery');

gallery?.appendChild(card);
// make a section element for the card
// make a heading
// add the section to our page