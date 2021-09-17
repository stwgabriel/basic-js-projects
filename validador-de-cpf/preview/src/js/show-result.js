//
const resultField = document.querySelector('#isvalid');

export class ResultField {

	constructor() {

		this.span = document.createElement('span');
		this.span.innerHTML = 'O seu resultado irá aparecer aqui!';
	}

	showResult(isvalid) {

		if (isvalid) {

			resultField.classList.add('--valid');
			resultField.setAttribute('title', 'valido!');
			this.span.innerText = 'CPF valido!';
			resultField.innerHTML = '';
			resultField.appendChild(this.span);
		} else {

			resultField.classList.add('--invalid');
			resultField.setAttribute('title', 'invalido!');
			this.span.innerText = 'CPF invalido!';
			resultField.innerHTML = '';
			resultField.appendChild(this.span);
		}
	}

	refreshField() {

		resultField.classList.remove('--valid');
		resultField.classList.remove('--invalid');
		resultField.setAttribute('title', 'ao validar o seu resultado irá aparecer aqui!');
		resultField.innerHTML = '';
		resultField.appendChild(this.span);
	}
}