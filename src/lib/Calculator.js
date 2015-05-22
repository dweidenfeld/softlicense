export default class Calculator {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add() {
		return this.a + this.b;
	}

	sub() {
		return this.a - this.b;
	}
}