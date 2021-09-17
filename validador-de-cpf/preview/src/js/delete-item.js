import { CpfHistory } from "./cpf-history.js";
import { CPFValidator } from "./cpf-validator.js";

const history = new CpfHistory()
const validator = new CPFValidator()
const historyField = document.getElementById('history')

export class DeleteItem {

	delete(item) {

		item.parentElement.remove();
		history.save()
	}

	clearHistory() {

		historyField.innerHTML = '';
		history.save();
		validator.resetOldCpf();
	}
}