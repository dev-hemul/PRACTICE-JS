// Приклад роботи з fetch
// Використання методу GET, отримаю якісь дані

/*fetch('https://jsonplaceholder.typicode.com/users/10', {
	method: 'GET',
	}
).then((data) => {
	return data.json()
}).then((info) => {
	console.log(info);
});*/

// Використання методу POST
// Відправляю якісь дані на сервер

/*const newPost = {
    "userId": 1,
    "id": 77777,
    "title": "hello",
    "body": "i say hello world"
};

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify(newPost) // переконвертировать в JSON
	}
).then((data) => {
	if (data.status === 200) {
		return data.json();
	}else {
		console.error('помилка');
	}

	console.log(data);
});*/


// Використання Axios
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

// GET запит
axios.get(url).then((data) => {
	console.log(data);
})

// POST запит

axios.post(
	'https://jsonplaceholder.typicode.com/posts/',{
	title: 'test'
}
).then((response) => {
	console.log(response);
})






