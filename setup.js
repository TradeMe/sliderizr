var exec = require('child_process').exec;

var commands = [
	'npm install -g gulp@^3.8.11',
	'npm install tsd -g',
	'npm install',
	'tsd reinstall -so'
];

var runCommand = function (commandIndex) {
	var command = commands[commandIndex];
	var execed = exec(command);
	execed.stderr.pipe(process.stderr);
	execed.stdout.pipe(process.stdout);

	execed.on('error', function (error) {
		if (error) {
			console.log('"' + command + '" failed. UH OH: ' + error);
		}
	});

	execed.on('close', function () {
		console.log('"' + command + '" succeeded.');
		if (commands[commandIndex + 1]) {
			runCommand(commandIndex + 1);
		}
	});
};

runCommand(0);
