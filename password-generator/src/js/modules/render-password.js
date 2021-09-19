//

import measureStrength from "./password-strength";

export default function renderPassword(password) {

	const display = document.getElementById('password-display');

	display.value = password;
	measureStrength();
}