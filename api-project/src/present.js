const present = async(url) => {
    const data = await fetch(url);
    console.log('Hearthstone data', data);
    const section = await displaySinglecard(data);
    if(section){
        setDrink(section);
    }
};

export default present;