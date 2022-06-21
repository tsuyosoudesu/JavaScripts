import present from "./src/present";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc47693210msh96f4fb2d0ebfea0p1df52bjsn3af9e1918bab',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

const URL = fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	window.addEventListener('DOMContentLoaded', () => {
		present(URL);
	});