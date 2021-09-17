//
import { CPFMask } from "./cpf-mask.js";
import { CPFValidator } from "./cpf-validator.js";

const cpfMask = new CPFMask();
const validator = new CPFValidator();

class App {

	constructor() {

		this.form = document.getElementById("signup-form");
		this.submit = document.querySelector("#submit");
		this.fields = this.form.querySelectorAll("input");
		[this.email, this.confirmEmail] = document.querySelectorAll(".email");
		[this.password, this.confirmPassword] = document.querySelectorAll(".password");

		this.form.addEventListener('beforeinput', e => this.userIsertion(e));
		this.email.addEventListener('blur', e => this.userIsertion(e));
		this.confirmEmail.addEventListener('blur', e => this.userIsertion(e));
		this.submit.addEventListener('click', e => this.send(e));
	}

	userIsertion(input) {

		this.input = input;
		this.inputTarget = input.target;
		this.data = input.data;
		this.type = input.inputType;

		this.specialChars = /[-$&+,:;=?@#|'~}[{<>._`´"¨^\]*(ºª§₢°\/)%!]/;
		this.numbers = /[0-9]/;
		this.emailPattern = /^[^ ]+@[^ ]+\.[a-z]{1,10}$/;

		this.inputTarget.classList.contains("email") && this.emailInput();
		if (this.type === "insertLineBreak") return;
		this.inputTarget.classList.contains("usercpf") && this.cpfInput();
		if (
			this.inputTarget.classList.contains("name") ||
			this.inputTarget.classList.contains("username")
		) {
			App.resetAlerts(this.inputTarget, this.password, this.confirmPassword);
			if (this.type === "deleteContentBackward") return;
			if (this.specialChars.test(this.data)) input.returnValue = false;
			if (this.inputTarget.value.length < 2) App.tooShort(this.inputTarget);
		}

		this.inputTarget.classList.contains("password") && this.passwordInput();
	}

	insertValue() {

		if (this.type !== "insertText") return;
		this.input.returnValue = false;
		this.inputTarget.value = this.inputTarget.value + this.data;
	}

	cpfInput() {

		if (this.type === "deleteContentBackward") {

			App.resetAlerts(this.inputTarget, this.password, this.confirmPassword);
			return;
		}
		if (!this.numbers.test(this.data)) { this.input.returnValue = false; return; }
		if (this.inputTarget.value.length < 14) {

			App.resetAlerts(this.inputTarget, this.password, this.confirmPassword);
			App.invalid(this.inputTarget)
			this.insertValue();
		}

		this.inputTarget.value = cpfMask.mask(this.inputTarget.value);

		if (this.inputTarget.value.length === 14) {

			this.isvalid = validator.validate(this.inputTarget.value);

			if (this.isvalid) {
				App.valid(this.inputTarget);
			}
			if (!this.isvalid) {
				App.invalid(this.inputTarget);
			}
		}
	}

	emailInput() {

		if (this.type === "insertLineBreak") {

			this.validateEmail();
			return;
		};

		if (this.type === "deleteContentBackward") {

			App.resetAlerts(this.inputTarget, this.email, this.confirmEmail);
			return;
		}

		App.resetAlerts(this.inputTarget, this.email, this.confirmEmail);
		this.insertValue();

		if (this.email.value === "" && this.confirmEmail.value === "") return;

		this.validateEmail();
	}

	validateEmail(e = "") {

		App.resetAlerts(this.inputTarget, this.email, this.confirmEmail);
		if (e !== "") this.inputTarget = e.target;
		if (this.inputTarget.value === "") return;
		if (!this.inputTarget.value.match(this.emailPattern)) { App.invalid(this.inputTarget); return; }
		else { App.valid(this.inputTarget) };
		if (this.email.value !== "" && this.confirmEmail.value !== "") {

			if (this.email.value === this.confirmEmail.value) {

				App.valid(this.email);
				App.valid(this.confirmEmail);
			} else {

				App.invalid(this.email);
				App.invalid(this.confirmEmail);
			}
		}
	}

	passwordInput() {


		if (this.type === "deleteContentBackward") {

			this.input.returnValue = false;
			this.inputTarget.value = this.inputTarget.value.slice(0, -1);
			App.resetAlerts(this.inputTarget, this.password, this.confirmPassword);
			this.validatePass();
			return;
		}

		App.resetAlerts(this.inputTarget, this.password, this.confirmPassword);
		this.insertValue();

		if (this.inputTarget.value.length < 8) { App.tooShort(this.inputTarget); return; }

		this.validatePass();
	}

	validatePass() {

		if (this.password.value !== "" && this.confirmPassword.value !== "") {

			App.resetAlerts(this.inputTarget, this.password, this.confirmPassword);

			if (this.password.value === this.confirmPassword.value) {

				App.valid(this.password);
				App.valid(this.confirmPassword);
			} else {

				App.invalid(this.password);
				App.invalid(this.confirmPassword);
			}
		}
	}

	send(clickEvent) {

		this.fields.forEach((field) => {

			field.parentElement.classList.remove("--empty");

			field.value === "" && field.parentElement.classList.add("--empty");

			if (
				field.parentElement.classList.contains("--invalid") ||
				field.parentElement.classList.contains("--too-short")
			) {

				if (field.classList.contains("password") && field.value.length > 7) {

					App.unmatch(this.password, this.confirmPassword);
					clickEvent.preventDefault();
					return;
				}
				if (field.classList.contains("email") && field.value.match(this.emailPattern)) {

					App.unmatch(this.email, this.confirmEmail);
				}

				field.parentElement.classList.add("--subimt-alert");
				clickEvent.preventDefault();
			}
		});
	}

	static valid(el) {

		el.parentElement.classList.remove("--invalid");
		el.parentElement.classList.add("--valid");
	}

	static invalid(el) {

		el.parentElement.classList.remove("--valid");
		el.parentElement.classList.add("--invalid");
	}

	static tooShort(el) {

		el.parentElement.classList.add("--too-short");
	}

	static unmatch(mainField = "", confirmField = "") {

		mainField.parentElement.classList.add("--unmatch-alert");
		confirmField.parentElement.classList.add("--unmatch-alert");
	}

	static resetAlerts(el, mainField = "", confirmField = "") {

		el.parentElement.classList.remove("--subimt-alert");

		el.parentElement.classList.remove("--empty");

		el.parentElement.classList.remove("--too-short");

		el.parentElement.classList.remove("--valid");
		el.parentElement.classList.remove("--invalid");

		mainField.parentElement.classList.remove("--subimt-alert");
		confirmField.parentElement.classList.remove("--subimt-alert");

		mainField.parentElement.classList.remove("--unmatch-alert");
		confirmField.parentElement.classList.remove("--unmatch-alert");
	}
}

new App();
