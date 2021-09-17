const cpfDisplay = document.getElementById('cpf-input');
const validateButton = document.querySelector('.validate-button');
const charsField = document.querySelector('.chars');
const result = document.querySelector('.isvalid');
let inputValue;
let cpfDigits;
let cpfArray;

function verifyChar(key = 'undefined') {

   cpfArray = '';
   cpfDigits = '';
   inputValue = cpfDisplay.value;
   const azRegex = /[0-9]/i;

   if (key.code == 'Enter' || key.code == 'NumpadEnter') {

      validate();
      return;
   }
   if (key.code == 'Backspace') {

      refreshResult()
      return;
   }

   cpfArray = Array.from(inputValue);

   cpfDigits = inputValue.replace(/\D+/g, '');

   if (inputValue.length === 14) return;
   if (!azRegex.test(inputValue)) return;

   inputMask();
   writeChar();
   refreshResult();
};

function inputMask() {

   if (inputValue.length === 3) {

      inputValue = inputValue + '.';
   };
   if (inputValue.length === 7) {

      inputValue = inputValue + '.';
   };
   if (inputValue.length === 11) {

      inputValue = inputValue + '-';
   };
};

function writeChar() {

   cpfDisplay.value = inputValue;
};

function validate() {

   cpfDisplay.focus();
   verifyChar();

   if (!cpfDigits || cpfDigits.length < 11) return;

   let valide = false;
   let topNine = cpfDigits.slice(0, 9)
   let firstDigit = 0;
   let secondDigit = 0;
   let equal = true;

   for (let i = 0; i < cpfDigits.length - 1; i++) {

      if (cpfDigits[i] !== cpfDigits[i + 1]) {

         equal = false;
         break;
      }
   }

   if (equal) {

      valide = false;
      result.innerText = 'CPF Inválido!';
      result.classList.remove('--valid');
      result.classList.add('--invalid');
      return;
   }

   for (let i = 0; i < topNine.length; i++) {

      firstDigit += topNine[i] * (i + 1);
   }
   firstDigit = firstDigit % 11;

   if (firstDigit === 10) {

      firstDigit = 0;
   }

   let firstDigitResult = topNine.concat(firstDigit);

   for (let i = 0; i < firstDigitResult.length; i++) {

      secondDigit += firstDigitResult[i] * i;
   }
   secondDigit = secondDigit % 11;

   let finalResult = firstDigitResult.concat(secondDigit);

   if (finalResult === cpfDigits) {

      valide = true;
      result.innerText = 'CPF Válido!';
      result.classList.remove('--invalid');
      result.classList.add('--valid');
   }
   if (finalResult !== cpfDigits) {

      valide = true;
      result.innerText = 'CPF Inválido!';
      result.classList.remove('--valid');
      result.classList.add('--invalid');
   }
};

function refreshResult() {

   result.classList.remove('--valid');
   result.classList.remove('--invalid');
   result.innerText = 'O seu resultado aparecerar aqui!';
}

window.onload = () => { cpfDisplay.onpaste = e => e.preventDefault() };
cpfDisplay.addEventListener('keydown', verifyChar);
validateButton.addEventListener('click', validate);