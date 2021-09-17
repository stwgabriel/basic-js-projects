import { readOnly } from "./setReadonly.js";
import { buttonClick, pressEnter } from "./interation.js";

export const secondaryDisplay = document.querySelector('.secondary-display');
export const display = document.querySelector('.main-display');
let calculated = false;
let hadError = false;

(function Calculator() {

   readOnly(display);
   buttonClick.start(display, calculated, hadError);
   pressEnter(display);
})();

