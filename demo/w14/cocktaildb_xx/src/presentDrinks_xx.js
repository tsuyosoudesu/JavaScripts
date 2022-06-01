import fetchDrinks from "./fetchDrinks_xx.js";
import displayDrinks from "./displayDrinks_xx.js";
const presentDrinks = async(url) => {
    const data = await fetchDrinks(url);
    console.log('drinks data', data);
    const section = await displayDrinks(data);
};

export default presentDrinks;