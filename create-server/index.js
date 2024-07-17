function run () {
	const data = new Promise ((resolve, reject) => {
		setTimeout(() => {
			/// fetch
			const data = {id: 1, name: 'Alex'};
			resolve(data)
		}, 1000)
	})

	data.then((userData) => {
		console.log(userData);
	})

	console.log(data);
}

run();

