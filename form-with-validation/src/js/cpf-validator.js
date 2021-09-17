//
export class CPFValidator {

	validate(cpf) {

		cpf = document.getElementById('cpf-field').value;

		this.numbersRegex = /0-9/g;
		this.cpf = cpf.replace(/\D+/g, '');

		if (this.cpf.length < 11 || this.cpf.length > 11) { return false; };

		this.allDigitsEqual = true;
		this.cpfArray = this.cpf.split('');

		for (let position = 0; position < this.cpfArray.length - 1; position++) {

			if (this.cpfArray[position] !== this.cpfArray[position + 1]) { this.allDigitsEqual = false; break; }
		}

		if (this.allDigitsEqual) return false;

		//
		this.firstNine = this.cpf.slice(0, 9);
		this.firstDigit = 0;

		for (let digit in this.firstNine) {

			this.firstDigit += this.firstNine[Number(digit)] * (Number(digit) + 1);
		}

		this.firstDigit = this.firstDigit % 11;
		this.firstDigitResult = this.firstNine.concat(this.firstDigit);

		//
		this.secondDigit = 0;

		for (let digit in this.firstDigitResult) {

			this.secondDigit += this.firstDigitResult[Number(digit)] * (Number(digit));
		}

		this.secondDigit = this.secondDigit % 11;
		this.cpfResult = this.firstDigitResult.concat(this.secondDigit);
		this.isValid = this.cpf === this.cpfResult;

		return this.isValid
	}
}
