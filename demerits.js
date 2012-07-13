#!/usr/bin/env node

if (process.argv.length !== 4) {
	console.error('usage: demerits.js <username> <# demerits>');
	process.exit(1);
}

var str = process.argv[2]+ ': demerit';
for (var ii = 0; ii < parseInt(process.argv[3], 10) - 1; ii++)
	str = str + '!';

console.log(str);
