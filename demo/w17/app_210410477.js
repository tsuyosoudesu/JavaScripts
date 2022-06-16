import presentDrinks from "./src/presentDrinks_xx.js";

import { LOCAL_URL, hasNetwork, searchItems } from "./api/search/config_210410477.js";

import './src/searchForm_xx.js';

const URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=c';

console.log('config_210410477.js',{ LOCAL_URL, hasNetwork, searchItems });


window.addEventListener('DOMContentLoaded', () => {
    if (hasNetwork){
        presentDrinks(URL);
    }else{
        presentDrinks(LOCAL_URL + 'c.json');
    }
    
});