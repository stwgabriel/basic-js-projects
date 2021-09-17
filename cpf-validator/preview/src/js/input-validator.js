//
import { CPFValidator } from "./cpf-validator.js";
import { userInput, userCpf } from "./app.js";
import { ResultField } from "./show-result.js";

const cpfValidate = new CPFValidator();

export class VerifyInput {

	verifier(key) {

		this.key = key;
		this.numbers = /[0-9]/;
		this.userKey = this.key.data;
		this.userKeyType = this.key.inputType;

		if (this.userKeyType === 'deleteContentBackward' || this.userKey === 'Backspace' || this.userKey === 'Control') { return }

		if (this.userKeyType === 'insertLineBreak') { userInput(); cpfValidate.validate(userCpf); }
		if (!this.numbers.test(this.userKey)) {

			this.key.returnValue = false;
			this.key.preventDefault();
		}
	}
}

