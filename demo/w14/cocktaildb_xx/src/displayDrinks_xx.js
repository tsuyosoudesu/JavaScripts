
import get from'./getElement.js';
import { hideLoading } from './toggleLoading_xx.js';

const displayDrinks = async ({drinks}) => {
    console.log('drinks', drinks);
    const title = get('.title');
    const section = get('.section-center');
    if(!drinks){
        hideLoading();
        title.textContent = 'Sorry no drinks';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        const { isDrink:id, strDrink:name, strDrinkThumb:image} = drink;
        return `
        <a href="drink_210410477.html">
        <article class="cocktail" data-id="${IDBOpenDBRequest}">
          <img src="${image}" alt="cocktail">
          <h3>${name}</h3>
        </article>
      </a>      
        `;
    }).join(``);
    // console.log('newDrinks', newDrinks);
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
    
};

export default displayDrinks;