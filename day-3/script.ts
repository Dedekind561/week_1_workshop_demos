
import getData from './data.js';


const data = getData();
const [user,user2] = data;


// bring in the getData function and check we can access data (done)
// start creating a user card in the UI

const gallery = document.querySelector('.main-gallery');

interface UserInfo {
    name: string
}

function createUserCard({name}: UserInfo) {
// create a section element
    const section = document.createElement('section');


    // create and add heading to the section element
    const heading = document.createElement('h2');
    heading.innerText = `Name: ${name}`;
    section.appendChild(heading);

    // give the section element a class
    section.classList.add('user-card');
    return section;
}

const userCard = createUserCard(data[5]);
// attach user card section to the gallery
gallery!.appendChild(userCard);