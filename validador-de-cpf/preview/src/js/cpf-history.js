//
import { AddCpf } from "./add-to-history.js";

const toHistory = new AddCpf();

const history = document.getElementById('history');

export class CpfHistory {

	getHistory() {

		this.userHistory = history.querySelectorAll('li');

		this.isValidArray = [];
		this.cpfArray = [];

		this.userHistory.forEach((element) => {

			this.span = element.querySelector('span');


			if (element.classList.contains('--valid')) {

				this.isValidArray.push('valid');
				this.cpfArray.push(this.span.innerText);
			} else if (element.classList.contains('--invalid')) {

				this.isValidArray.push('invalid');
				this.cpfArray.push(this.span.innerText);
			}
		})
	}

	save() {

		this.getHistory();
		this.isvalidJSON = JSON.stringify(this.isValidArray);
		this.cpfJSON = JSON.stringify(this.cpfArray);

		localStorage.setItem('isvalidList', this.isvalidJSON);
		localStorage.setItem('cpflist', this.cpfJSON);
	}

	recover() {

		this.isvalidSaved = localStorage.getItem('isvalidList');
		this.cpfSaved = localStorage.getItem('cpflist');

		this.isvalidList = JSON.parse(this.isvalidSaved);
		this.cpfList = JSON.parse(this.cpfSaved);

		for (let cpf in this.cpfList) {

			this.cpfSaved = this.cpfList[cpf];
			this.isvalidSaved = this.isvalidList[cpf];
			toHistory.add(this.cpfSaved, this.isvalidSaved);
		}
	}
}

