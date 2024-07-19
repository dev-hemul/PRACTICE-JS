// Запит по старому синтаксису промісів

/*fetch('https://jsonplaceholder.typicode.com/todos')
	.then((data) => {
		return data.json();
	})
	.then((data) =>{
		console.log(data);
	})
	.catch((error) => {});*/

// Той же самий запит, але по новому синтаксису промісів
/*async function getData() {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data2 = await data.json();
	console.log(data);
	console.log(data2)
}

getData();*/

// Обробка помилок

/*async function errorTest() {
	const data = await fetch('fffffff').catch((error) => {
		console.log('error', error);
	});
	console.log(data);
}

errorTest();*/

async function errorTest() {
    try {
        const response = await fetch('fffffff');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Пример работы с данными, если они ожидаются в формате JSON
        console.log(data);
    } catch (error) {
        console.log('error', error);
    }
}

errorTest();






