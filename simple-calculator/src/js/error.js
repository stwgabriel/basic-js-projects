import { buttonClick } from "./interation.js";
import { secondaryDisplay } from "./app.js";

export function error(display, calculated, hadError) {

   secondaryDisplay.value = '';

   display.style.fontSize = '3rem';
   display.style.color = '#f5012f';
   display.style.padding = '1.3rem';

   display.value = 'Bad expression';
   calculated = true;
   hadError = true;

   buttonClick.removeListener();
   buttonClick.start(display, calculated, hadError);
};
