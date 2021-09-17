import { buttonClick } from "./interation.js";
import { secondaryDisplay } from "./app.js";

export const clearDisplay = (display, calculated, hadError) => {

   display.value = '';
   secondaryDisplay.value = '';
   display.style.fontSize = 'unset';
   display.style.color = 'unset';
   display.style.padding = '.7rem';
   hadError = false;
   calculated = false;

   buttonClick.removeListener();
   buttonClick.start(display, calculated, hadError);
};