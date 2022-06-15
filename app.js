const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62003c34c0msh48b7d03d8dfb098p1872fdjsnd06ce1d097c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    