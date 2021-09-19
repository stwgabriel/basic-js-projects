//

export default class GenPassword {

	constructor() {

		this.lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		this.uppercaseArray = this.lowercaseArray.map(letter => letter.toUpperCase());
		this.symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '<', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];
		this.numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

		this.lowercaseSelector = document.querySelector('#lowercase');
		this.uppercaseSelector = document.querySelector('#uppercase');
		this.numbersSelector = document.querySelector('#numbers');
		this.symbolsSelector = document.querySelector('#symbols');
	}

	getPasswordLength() {

		const passwordLength = document.querySelector('#password-length');
		const lengthControl = document.querySelector('.length-control');

		if (passwordLength.value < 5) {

			lengthControl.classList.remove('--maximum-alert');
			lengthControl.classList.add('--minimum-alert');
			passwordLength.value = 5;
			return 5;
		} else if (passwordLength.value > 50) {

			lengthControl.classList.remove('--minimum-alert');
			lengthControl.classList.add('--maximum-alert');
			passwordLength.value = 50;
			return 50;
		} else {

			setTimeout(() => {

				lengthControl.classList.remove('--maximum-alert');
				lengthControl.classList.remove('--minimum-alert');
			}, 1600)
		}

		return passwordLength.value;
	}

	generate(checked = this.isSelected(), values = [this.lowercaseArray, this.uppercaseArray, this.numbersArray, this.symbolsArray]) {

		const chars = [];
		let password = [];

		for (let item in checked) {

			if (checked[item]) {

				chars.push(values[item])
			}
		}

		for (let i = 1; i <= this.getPasswordLength(); i++) {

			let randCharType = this.getRand(chars.length) >= chars.length ? this.getRand(chars.length) - 1 : this.getRand(chars.length);
			let randChar = this.getRand(chars[randCharType].length) >= chars[randCharType].length ? this.getRand(chars[randCharType].length) - 1 : this.getRand(chars[randCharType].length);

			password.push(chars[randCharType][randChar]);
		}

		return password.join('')
	}

	isSelected() {

		return [this.lowercaseSelector.checked, this.uppercaseSelector.checked, this.numbersSelector.checked, this.symbolsSelector.checked]
	}

	getRand(max) {

		return Math.floor(Math.random() * (max - 0) + 0);
	}
}
