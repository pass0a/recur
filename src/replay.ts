import { readFileSync } from 'fs';
import { execSync } from 'child_process';

let info = readFileSync('log.txt', 'ascii');
let lines = info.split(/[\n]/);

async function sleep(timeout: number) {
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, timeout);
	});
}
async function main() {
	for (const line of lines) {
		if (line.length > 4) {
			execSync('adb shell ' + line);
			await sleep(500);
		} else {
			console.log(line);
		}
	}
}
main();
