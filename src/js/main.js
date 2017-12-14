import Utils from './_sub';

Utils.method1();
Utils.method2();

timer(5000);
console.log("aaaaa");

function timer(delay) {
	let myFirstPromise = new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve("Success!"); // Yay! Everything went well!
		}, delay);
	});

	myFirstPromise.then((successMessage) => {
		// successMessage is whatever we passed in the resolve(...) function above.
		// It doesn't have to be a string, but if it is only a succeed message, it probably will be.
		console.log("Yay! " + successMessage);
	});
}