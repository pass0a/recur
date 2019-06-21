import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as mongoose from 'mongoose';
let DB_URL = 'mongodb://127.0.0.1/poseidon_data';
let options = { useNewUrlParser: true, ssl: false };
mongoose.connect(DB_URL, options, function(error) {
	if (error) console.error(error);
	else {
		console.log('connect ok!!!');
	}
});
