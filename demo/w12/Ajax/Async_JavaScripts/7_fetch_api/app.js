const url ='./api/people.json';

fetch(url)
.then((response)=> response.json())
.then(data => console.log(data))
.catch(()=> console.log(new Error('url error')));