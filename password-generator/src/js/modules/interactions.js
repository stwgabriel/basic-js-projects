//
import renderPassword from "./render-password.js";
import GenPassword from "./generate-password.js";
import allUnchecked from "./is-checked.js";
import measureStrength from "./password-strength.js";

export default function interactions() {

	const pass = new GenPassword()

	document.addEventListener('click', e => {

		const clickTarget = e.target;

		if (clickTarget.classList.contains('regenerate')) {

			renderPassword(pass.generate())
		}

		if (
			clickTarget.classList.contains('lowercase') ||
			clickTarget.classList.contains('uppercase') ||
			clickTarget.classList.contains('numbers') ||
			clickTarget.classList.contains('symbols')
		) {

			allUnchecked()
		}

		if (clickTarget.classList.contains('alert-overlay')) {

			const lengthControl = document.querySelector('.length-control');

			lengthControl.classList.remove('--maximum-alert');
			lengthControl.classList.remove('--minimum-alert');
		}

		if (clickTarget.classList.contains('copy-pass')) {

			const pass = document.getElementById('password-display');
			const copyButton = document.querySelector('.copy-button');

			pass.select();
			document.execCommand("copy");

			copyButton.classList.add('--copied');

			setTimeout(() => {

				copyButton.classList.remove('--copied');
			},1600)
		}

	})

	document.addEventListener('change', e => {

		const clickTarget = e.target;

		if (clickTarget.classList.contains('password-length')) {

			renderPassword(pass.generate())
		}
		if (clickTarget.classList.contains('password-display')) {

			measureStrength()
		}
	})

}