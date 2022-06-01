const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionariesBtn = document.querySelector('#show-millionaries');
const sorBtn = document.querySelector('#sort');
const calculatBtn = document.querySelector('#calculate-wealth');

const updateDOM = (providedData = data) => {
    let tempData = providedData.map((item) => {
        return `<div class="person"><strong>${item.name}Delphine Brar</strong> ${formatMoney(item.money)}</div>`
    });
    tempData = tempData.join('');
    console.log('tempData', tempData);
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>${tempData}` 
}

let data = [];

   

const config = {
    numRandom: 5,
        ratio: 2,
    showCondition: 2000000}


const addData = (obj) => {
    data.push(obj);
    console.log('data', data);
    updateDOM();
}
// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

function formatMoney(number) {

  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}

const getRandomUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log('random user data ', data)
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*10000000)
    }
    addData(newUser);
}
const getUsers = () => {
    for(let i=0; i< config.numRandom; i++){
        getRandomUser();
    }
}

getUsers();
// for(let i=0;i<config.numRandom;i++){
    
//     getRandomUser();
// }

const changBtnText = () => {
    addUserBtn.textContent = `Add Users (${config.numRandom})`;
    doubleBtn.textContent = `Raise Money * ${config.ratio}`;
    showMillionariesBtn.textContent = `Show > ${config.showCondition}`;
}
changBtnText();


const doubleMoney = () => {
    data = data.map((user) => {
        return {
            name: user.name,
            money: user.money *config.ratio
        }
    });
    updateDOM();
}

const showMillionaries = () => {
    const filteredData = data.filter((user) =>{
        return user.money > config.showCondition
    });
    console.log('filteredData', filteredData);
    updateDOM(filteredData);

}

const  sortByRichest = () =>{
    data.sort( (a,b) => {
        return b.money - a.money
    });

    updateDOM();
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionariesBtn.addEventListener('click', showMillionaries);

sorBtn.addEventListener('click', sortByRichest);