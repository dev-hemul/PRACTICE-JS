function fetchUserInfo (callback) {

	setTimeout(() => {
		/// fetch
		const data = {id: 1, name: 'alex'};
		callback(data);
}, 2000);

}


function run () {
	fetchUserInfo((userInfo) => {
		console.log(userInfo);
	});
}

run();

