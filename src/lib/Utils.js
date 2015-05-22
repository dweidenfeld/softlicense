export function generate(functionName, message) {
	return functionName + '(): ' + message;
}

export function log(message) {
	console.log(message);
}