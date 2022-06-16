import get from './getElement.js';
import presentDrinks from './presentDrinks_xx.js';
import { LOCAL_URL, hasNetwork, searchItems } from '../api/search/config_210410477.js';
const form = get('.search-form');

const input = get('[name="drink"]');

// console.log('form', form);

// console.log('input', input);

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log('input', input.value);
    const  value = input.value;
    if(!value) return;
    if(hasNetwork){
        presentDrinks(`${baseURL}${value}`);
    }else{
        if(searchItems.find((item)=>item === value)){
        presentDrinks(`${LOCAL_URL}${value}.json`);
        }
    }
        
    
});