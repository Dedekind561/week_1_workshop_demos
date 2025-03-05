
import getData from './data.js';


const data = getData();
const [user] = data;


// bring in the getData function and check we can access data (done)
// start creating a user card in the UI

// create a section element
const section = document.createElement('section');

// create a heading element
const heading = document.createElement('h2');
heading.innerText = `Name: ${user.name}`;
section.appendChild(heading);

// give the section element a class
section.classList.add('user-card');

// attach it to the DOM tree
document.body.appendChild(section);