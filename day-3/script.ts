
import getData from './data.js';

interface UserInfo {
    name: string
}

const data = getData();
const [user,user2] = data;
const gallery = document.querySelector('.main-gallery');


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
gallery!.appendChild(userCard);