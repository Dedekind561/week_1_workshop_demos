
import getData from './data.js';

interface UserInfo {
    name: string
}

const data = getData();
const gallery = document.querySelector('.main-gallery');

const state = {
    searchInput: ''
}
// state means data that the UI depends on


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

// filter users based on their user name
// transform the user data into an array of user card
// map through the user data into user cards

function renderUserCards() {
    
    // find all the existing sections and remove them
    document.querySelectorAll('section').forEach(section => {
        section.remove();
    })

    const userCards = data
        .filter((user) => user.name.includes(state.searchInput))
        .map(createUserCard);

    gallery!.append(...userCards);
}

const input = document.querySelector('input');
const searchBtn = document.querySelector('.user-search');
searchBtn.addEventListener('click',function(event) {

    state.searchInput = input?.value;

    renderUserCards();
});

renderUserCards();