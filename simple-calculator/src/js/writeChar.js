
export function writeChar(key, display) {

   let displayValue = display.value;
   let displayLength = Number(displayValue.length);
   let specialChars = /[- + / * \.]/i;
   let actualKey = key.innerText;
   let haveAChar = false;
   let isAChar = false;

   if (specialChars.test(displayValue[displayLength - 1])) {

      haveAChar = true;
   }
   if (specialChars.test(actualKey)) {

      isAChar = true;
   }
   if (haveAChar && isAChar) {

      return;
   };
   if (displayValue == 0 && isAChar) {

      return;
   };

   display.focus()
   display.value += key.innerText;
   display.scrollLeft += display.scrollWidth;
};