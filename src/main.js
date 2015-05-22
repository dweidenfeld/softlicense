import Calculator from './lib/Calculator';
import * as Utils from './lib/Utils';
import { render } from './lib/render';

let calculator = new Calculator(10, 5);

render(
		Utils.generate('calculator.add', calculator.add()) + '\n' +
		Utils.generate('calculator.sub', calculator.sub())
	);