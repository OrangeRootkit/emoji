'use strict'

const inputLine =  document.querySelector('.header__input');
const cardText = document.querySelectorAll('.card__text');
console.log(cardText);

const changeColor = (event) => {
     inputLine.style.color = 'red'
 }

// const searchCard = (event) => {
//     inputLine.style.color = 'red'
// }


inputLine.addEventListener("click", changeColor());

// let handler = changeColor();
console.log('hi');
console.log('sdt')
console.log('he')
// ()=> {
//     inputLine.style.color = 'red';
// });