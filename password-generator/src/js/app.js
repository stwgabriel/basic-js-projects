import '../css/app.css';
import animate from './modules/animations.js';
import GenPassword from './modules/generate-password.js';
import interactions from './modules/interactions.js';
import allUnchecked from './modules/is-checked.js';
import measureStrength from './modules/password-strength';
class App {

	constructor() {

		const password = new GenPassword();
		
		allUnchecked();
		interactions();
		measureStrength();
		animate();
	}
}

new App()