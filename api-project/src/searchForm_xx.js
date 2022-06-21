import get from './getElement.js';
import presentDrinks from './presentDrinks_xx.js';
const form = get('.search-form');

const input = get('[name="cards"]');

// console.log('form', form);

// console.log('input', input);

const baseURL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks';

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log('input', input.value);
    const  value = input.value;
    if(!value) return;
        presentDrinks(`${baseURL}${value}`);
    
});