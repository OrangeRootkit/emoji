import { data } from "./data.js";

const home__grid = document.querySelector('.home__grid')
const inputLine =  document.querySelector('.header__input');
console.log(typeof home__grid)

function add (data) {
  for (let el of data) {
    createCard(el);
  }
}
add(data)

function createCard (obj) {
  const card = document.createElement('div');
  card.className ='home__grid-card';

  const symbol = document.createElement('p');
  symbol.textContent = obj.symbol;
  symbol.className ='emoji';

  const title = document.createElement('p');
  title.textContent = obj.title;
  title.className = 'capture';

  const keywords = document.createElement('p');
  let uniq = new Set (obj.keywords.split(' '));
  uniq = Array.from(uniq);
  keywords.textContent = uniq.join(' ');
  keywords.className = 'card__text';

  card.append(symbol,title, keywords);
  home__grid.append(card)
}

inputLine.addEventListener('input',(e)=>handleInput(e.target.value));

function handleInput (e) {
  home__grid.innerHTML = ' '
  console.log(e)
  for (let el of data) {
      if (el.keywords.includes(e.toLowerCase().trim())) {
      createCard(el);
    } else if (el.title.includes(e.toLowerCase().trim())) {
      createCard(el);
    }
   };
  }