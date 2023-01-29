'use strict'

const inputLine =  document.querySelector('.header__input');
// const cardText = document.querySelectorAll('.card__text');
// cardText.style.color = 'red';

const changeColor = (event) => {
    inputLine.style.color = 'red'
}

const searchCard = (event) => {
    inputLine.style.color = 'red'
}


inputLine.addEventListener("click", changeColor());

// let handler = changeColor();



// ()=> {
//     inputLine.style.color = 'red';
// });