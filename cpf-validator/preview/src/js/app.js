import { CpfHistory } from "./cpf-history.js";
import { CPFMask } from "./cpf-mask.js";
import { CPFValidator } from "./cpf-validator.js";
import { DeleteItem } from "./delete-item.js";
import { VerifyInput } from "./input-validator.js";

const verifyInput = new VerifyInput();
const mask = new CPFMask();
const cpfValidator = new CPFValidator();
const cpfHistory = new CpfHistory();
const deleteItem = new DeleteItem();

const inputDisplay = document.getElementById('input-display');
const app = document.getElementById('app');

export let userCpf = '';

export function userInput() {

	userCpf = inputDisplay.value;
	if (mask.mask(userCpf) === false) { return };
	inputDisplay.value = mask.mask(userCpf);
}

export function start() {

	cpfHistory.recover();
}

start()

inputDisplay.addEventListener('beforeinput', (key) => { userInput(); verifyInput.verifier(key); });

app.addEventListener('click', (item) => {

	const target = item.target

	if (target.classList.contains('validation-button')) {

		userInput();
		cpfValidator.validate(userCpf);
	}
	if (target.classList.contains('delete-button')) {

		deleteItem.delete(target);	
	}
	if (target.classList.contains('clean-history')) {

		deleteItem.clearHistory();
	}
		
});
