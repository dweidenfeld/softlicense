import Calculator from '../../src/lib/Calculator';
import assert from 'assert';

describe('Calculator', function () {
	let calculator = new Calculator(10, 5);

	describe('add', function () {
		it('should return 15', function () {
			assert.equal(15, calculator.add());
		});
	});

	describe('sub', function () {
		it('should return 5', function () {
			assert.equal(5, calculator.sub());
		});
	});
});