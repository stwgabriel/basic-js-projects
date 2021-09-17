import CPFValidator from "./cpf-validator.js";

//
class GenCPF {

	constructor() {

		this.cpfValidator = new CPFValidator();
	}

	// generate the first nine digits
	genFirstNine() {

		this.min = 100000000;
		this.max = 999999999;

		this.firstNine = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

		return this.firstNine;
	}

	// generate the last two digits
	genValidCPF(digits) {

		this.firstNineDigits = `${digits}`; // haha, convert to string 

		if (this.cpfValidator.repeatedNumbers(`${this.firstNineDigits}`)) {

			// validate if the first nine digits are repeated, like: 111111111
			// if is repeated rerun the function with new digits
			genValidCPF(this.genFirstNine());
			return;
		}

		this.digitOne = this.cpfValidator.genDigitOne(this.firstNineDigits);
		this.firstTen = this.firstNineDigits.concat(this.digitOne);
		this.digitTwo = this.cpfValidator.genDigitTwo(this.firstTen);

		this.result = this.firstTen.concat(this.digitTwo);

		// validate if the result is a valid cpf
		if (this.cpfValidator.validate(this.result)) { this.genValidCPF(this.genFirstNine()) };
		return this.result
	}
}