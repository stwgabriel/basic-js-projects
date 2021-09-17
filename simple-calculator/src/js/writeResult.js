import { buttonClick } from "./interation.js";
import { display } from "./app.js";

export function writeResult(result, calculated, hadError) {

   display.value = result;
   calculated = true;

   buttonClick.removeListener();
   buttonClick.start(display, calculated, hadError);
};
