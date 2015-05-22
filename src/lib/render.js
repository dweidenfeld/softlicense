import * as Utils from './Utils';
import $ from 'jquery';
//import * as jQueryUI from 'jquery-ui';

export function render(content) {
	if (typeof window !== 'undefined') {
		$('.output').html(content);
		//$('.stuff').button();
	} else {
		Utils.log(content);
	}
}

export function renderAlt(content) {
	render('alt' + content);
}