//
import renderPassword from "./render-password.js";
import GenPassword from "./generate-password";

export  default function allUnchecked() {

	const pass = new GenPassword();
	const lowercaseSelector = document.querySelector('#lowercase'),
		uppercaseSelector = document.querySelector('#uppercase'),
		numbersSelector = document.querySelector('#numbers'),
		symbolsSelector = document.querySelector('#symbols');

	if (!lowercaseSelector.checked &&
		!uppercaseSelector.checked &&
		!numbersSelector.checked &&
		!symbolsSelector.checked) {

		lowercaseSelector.checked = true;
	}

	renderPassword(pass.generate())
}