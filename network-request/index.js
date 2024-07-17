// Приклад роботи з fetch

fetch('https://jsonplaceholder.typicode.com/comments'
).then((data) => {
	return data.json()
}).then((info) => {
	console.log(info);
});

