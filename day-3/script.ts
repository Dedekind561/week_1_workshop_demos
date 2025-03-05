
import getData from './data.js';


const data = getData();
const [user] = data;
console.log(user);

// bring in the getData function and check we can access data (done)
// start creating a user card in the UI

// create a section element
const section = document.createElement('section');

// give the section element a class
section.classList.add('user-card');

// attach it to the DOM tree
document.body.appendChild(section);