//
export class CPFMask {

	mask(cpf) {

		this.cpf = cpf.replace(/\D+/g, '');
		if (cpf === '') return '';
		this.cpfArray = this.cpf.split('');
		this.newArray = [];

		this.cpfArray.forEach(digit => {

			if (this.newArray.length === 3) {

				this.newArray.push('.');
			}
			if (this.newArray.length === 7) {

				this.newArray.push('.');
			}
			if (this.newArray.length === 11) {

				this.newArray.push('-');
			}

			this.newArray.push(digit)
			this.maskedCpf = this.newArray.join('');
		});

		return this.maskedCpf;
	}
}
