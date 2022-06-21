
import get from'./getElement.js';
import { hideLoading } from './toggleLoading_xx.js';

const Hearthstones = async ({Hearthstones}) => {
    console.log('Hearthstone', Hearthstones);
    const title = get('.title');
    const section = get('.section-center');
    if(!Hearthstones){
        hideLoading();
        title.textContent = 'Sorry no cards';
        section.innerHTML = null;
        return;
    }
    const newHearthstone = Hearthstones.map((cardbacks) => {
        const { cardBackId:id, name:name, img:image} = cardbacks;
        return `
      <a href="Hearthstones.html">
      <article class="Hearthstone" data-id="${id}">
        <img src="${image}" alt="Hearthstone">
        <h3>${name}</h3>
      </article>
      </a>`;
    }).join(``);
    // console.log('newDrinks', newDrinks);
    hideLoading();
    title.textContent = '';
    section.innerHTML = newHearthstone;
    return section;
    
};

export default Hearthstones;