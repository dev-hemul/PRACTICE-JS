// Приклад роботи з fetch

fetch('https://jsonplaceholder.typicode.com/users/11'
).then((data) => {
	return data.json()
}).then((info) => {
	console.log(info);
});

