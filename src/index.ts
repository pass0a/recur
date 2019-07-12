 
// import * as mongoose from 'mongoose';
// let DB_URL = 'mongodb://127.0.0.1/poseidon_data';
// let options = { useNewUrlParser: true, ssl: false };
// mongoose.connect(DB_URL, options, function(error) {
// 	if (error) console.error(error);
// 	else {
// 		console.log('connect ok!!!');
// 	}
// });
function delay(milliseconds: number, count: number): Promise<number> {
	return new Promise<number>((resolve) => {
		setTimeout(() => {
			resolve(count);
		}, milliseconds);
	});
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
	console.log('Hello');

	for (let i = 0; i < 5; i++) {
		// await is converting Promise<number> into number
		const count: number = await delay(500, i);
		console.log(count);
	}

	console.log('World!');
}

dramaticWelcome();
