export default class CPFValidator {

	constructor() {

		this.numbersRegex = /0-9/g;
	}

	validate(cpf) {

		this.cpf = cpf.replace(/\D+/g, '');

		if (this.cpf.length < 11 || this.cpf.length > 11) { return false; };
		if (this.repeatedNumbers()) { return false }

		//
		this.firstNine = this.cpf.slice(0, 9);

		this.digitOne = this.genDigitOne();
		this.firstTen = this.firstNine.concat(this.digitOne);
		this.digitTwo = this.genDigitTwo();

		//
		this.cpfResult = this.firstTen.concat(this.digitTwo);

		this.isValid = this.cpf === this.cpfResult;

		return this.isValid;
	}

	repeatedNumbers(cpf = this.cpf) {
		
		this.allDigitsEqual = true;
		this.cpfArray = cpf.split('');

		for (let p = 0; p < this.cpfArray.length - 1; p++) {

			if (this.cpfArray[p] !== this.cpfArray[p + 1]) {

				this.allDigitsEqual = false;
				break;
			}
		}

		if (this.allDigitsEqual) return true;
	}

	genDigitOne(digits = this.firstNine) {

		this.firstDigit = 0;

		for (let digit in digits) {

			this.firstDigit += digits[Number(digit)] * (Number(digit) + 1);
		}

		this.firstDigit = this.firstDigit % 11;

		return this.firstDigit;
	}

	genDigitTwo(digits = this.firstTen) {

		this.secondDigit = 0;

		for (let digit in digits) {

			this.secondDigit += digits[Number(digit)] * (Number(digit));
		}

		this.secondDigit = this.secondDigit % 11;

		return this.secondDigit;
	}
}