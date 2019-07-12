import { readFileSync } from 'fs';
import { execSync } from 'child_process';

let info = readFileSync('log.txt', 'ascii');
let lines = info.split(/[\n]/);
for (const line of lines) {
	if (line.length > 4) {
		execSync('adb shell sendevent ' + line);
	} else {
		console.log(line);
	}
}
