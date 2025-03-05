
import getData from './data.js';


const data = getData();
const [user] = data;


// bring in the getData function and check we can access data (done)
// start creating a user card in the UI

// retrieve the gallery element
// append section to the gallery element

const gallery = document.querySelector('.main-gallery');

// create a section element
const section = document.createElement('section');


// create a heading element
const heading = document.createElement('h2');
heading.innerText = `Name: ${user.name}`;
section.appendChild(heading);

// give the section element a class
section.classList.add('user-card');

// attach user card section to the gallery
gallery!.appendChild(section);