export default function animate() {

	document.querySelector('.regenerate-button').addEventListener('click', () => {

		document.querySelector('.regenerate-button').classList.add('--clicked');

		setTimeout(() => {
			document.querySelector('.regenerate-button').classList.remove('--clicked');
		}, 600)
	})
}