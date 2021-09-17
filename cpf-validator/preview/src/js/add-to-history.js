//
import { CPFMask } from "./cpf-mask.js";

const cpfMask = new CPFMask();

export class AddCpf {

	getDate() {

		this.date = new Date();

		[
			this.day,
			this.month,
			this.year,
			this.hour,
			this.minute
		] = [

				this.date.getDate(),
				this.date.getMonth(),
				this.date.getFullYear(),
				this.date.getHours() % 12,
				this.date.getMinutes()
			];


		if (this.hour.toString().length === 1) {

			this.hour = `0${this.hour}`
		};

		if (this.minute.toString().length < 2) {

			this.minute = `0${this.minute}`
		};

		this.time = document.createElement('span');
		this.time.classList.add('item-date');
		this.time.innerText = `${this.day}/${this.month}/${this.year} - ${this.hour}:${this.minute}`;

		return this.time;
	}

	createField(cpf, isvalid) {

		this.li = document.createElement('li');
		this.infoBlock = document.createElement('div');
		this.span = document.createElement('span');
		this.deleteButton = document.createElement('button');
		this.time = this.getDate();

		this.span.innerText = cpf;
		this.deleteButton.classList.add('delete-button');
		this.deleteButton.setAttribute('title', 'Clique para remover do historico')

		this.infoBlock.classList.add('info-block');
		this.infoBlock.appendChild(this.span);
		this.infoBlock.appendChild(this.time);

		this.li.appendChild(this.infoBlock);
		this.li.appendChild(this.deleteButton);
		this.li.classList.add('history-item');
		this.li.classList.add('down-anim');

		if (isvalid === true || isvalid === 'valid') {

			this.li.classList.add('--valid');
			this.li.setAttribute('title', 'valido');
		} else if (isvalid === false || isvalid === 'invalid') {

			this.li.classList.add('--invalid');
			this.li.setAttribute('title', 'invalido');
		}

		return this.li;
	}

	add(cpf, isvalid) {

		this.cpf = cpfMask.mask(cpf);
		this.isvalid = isvalid;
		this.historyField = document.getElementById('history');

		this.historyField.prepend(this.createField(this.cpf, this.isvalid));
	}
}
