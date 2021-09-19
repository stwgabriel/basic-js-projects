//

export default function measureStrength() {

	const password = document.getElementById('password-display').value;
	const passwordLength = password.length;
	const strengthView = document.querySelector('.password-strength');

	if (passwordLength <= 6) {

		strengthView.classList.add('--weak');
		strengthView.classList.remove('--fair');
		strengthView.classList.remove('--good');
		strengthView.classList.remove('--excellent');
	}
	if (passwordLength > 6 && passwordLength <= 9) {

		strengthView.classList.add('--fair');
		strengthView.classList.remove('--weak');
		strengthView.classList.remove('--good');
		strengthView.classList.remove('--excellent');
	}
	if (passwordLength > 9 && passwordLength <= 14) {

		strengthView.classList.add('--good');
		strengthView.classList.remove('--weak');
		strengthView.classList.remove('--fair');
		strengthView.classList.remove('--excellent');
	}
	if (passwordLength > 14) {

		strengthView.classList.add('--excellent');
		strengthView.classList.remove('--weak');
		strengthView.classList.remove('--fair');
		strengthView.classList.remove('--good');
	}
}
