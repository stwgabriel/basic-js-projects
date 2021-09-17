import { readOnly } from "./setReadonly.js";
import { writeChar } from "./writeChar.js";
import { deleteChar } from "./deleteChar.js";
import { calculate } from "./calculate.js";
import { clearDisplay } from "./clearDisplay.js";

export function pressEnter(display) {

   display.addEventListener('keypress', (key) => (key.keyCode === 13) && calculate(display, calculated, hadError))
};

function ButtonClick() {

   this.start = (display, calculated, hadError) => {

      this.addListener = () => {

         app.addEventListener('click', this.events);
      };
      this.removeListener = () => {

         app.removeEventListener('click', this.events);
      }
      this.events = (event) => {

         let danger = false;
         let values = display.value;
         let azRegex = /[A-Z a-z]/;

         for (let char of values) {

            if (azRegex.test(char)) {

               danger = true;
            };
         };

         const key = event.target;

         if (key.classList.contains('key')) {

            readOnly(display);
            if (calculated && hadError) {

               clearDisplay(display, calculated, hadError);
            };
            if (calculated && danger) {

               clearDisplay(display, calculated, hadError);
            }
         };
         if (key.classList.contains('num-key')) writeChar(key, display);
         if (key.classList.contains('clear-key')) clearDisplay(display, calculated, hadError);
         if (key.classList.contains('delete-key')) deleteChar(display);
         if (key.classList.contains('equal-key')) calculate(display, calculated, hadError);
      }
      this.addListener();
   }
}

export const buttonClick = new ButtonClick();