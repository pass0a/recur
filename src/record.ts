import { spawn } from 'child_process';
import { appendFileSync } from 'fs';
const ls = spawn('adb', [ 'exec-out', 'getevent' ]);

let record = new Array<any>(),
	tmp: any = {};
ls.stdout.on('data', (data) => {
	let info = '';
	let str = `${data}`;
	let lines = str.split(/[\n]/);
	// if (info. > 1000) {
	// 	process.exit(0);
	// }

	for (const line of lines) {
		let attr = line.split(/[:]/);
		if (2 == attr.length && attr[0].startsWith('/')) {
			let values = attr[1].trim().split(/[ ]/);
			info += 'sendevent ';
			info += attr[0];
			for (const value of values) {
				info += ' ' + parseInt(value, 16);
			}
			info += '\n';
			// let tmp = { name: attr[0], value: attr[1] };
			// record.push(tmp);
		}
	}
	appendFileSync('log.txt', info);
});

ls.stderr.on('data', (data) => {});
