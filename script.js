import { data } from "./data.js";

const home__grid = document.querySelector('.home__grid')
const inputLine =  document.querySelector('.header__input');

function createCard (obj) {
  let keywords = [...new Set (obj.keywords.split(' '))].join(' ');
  const card = document.createElement('div');
  card.className = 'home__grid-card';
  card.innerHTML = `<p class='emoji'>${obj.symbol}</p>
  <p class='capture'>${obj.title}</p>
  <p class='card__text'>${keywords}</p>`

  return card
}

function inputSearch(event) {
  home__grid.innerHTML = '';
  data
  .filter(
    (item)=>
    item.title.includes(event.target.value.toLowerCase().trim()) ||
    item.keywords.includes(event.target.value.toLowerCase().trim()))
  .forEach((item) => home__grid.append(createCard(item)));
};

inputLine.addEventListener('input',inputSearch);

data.forEach((card)=>home__grid.append(createCard(card)))