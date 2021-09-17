import { error } from "./error.js";
import { writeResult } from "./writeResult.js";
import { secondaryDisplay } from "./app.js";

export function calculate(display, calculated, hadError) {

   if (!display.value) { return };

   const azRegex = /[A-Z a-z]/i;
   const specialCharRegex = /[*+-/]/i;
   let danger = false;
   let result;
   result = display.value;

   for (let char of result) {

      if (azRegex.test(char)) {

         danger = true;
      };
   };

   try {

      if (danger) { error(display, calculated, hadError); return; };

      let octal = true;
      let counter = 0;

      while (octal) {

         octal = false;

         if (result[0] === '0') {

            result = result.substr(1, result.length);
            octal = true;

         } else {

            for (let i = 0; i < result.length; i++) {

               if (result[i] === '0') {

                  counter++;
               } else {

                  if (specialCharRegex.test(result[i])) {

                     if (result[i + 1] === '0') {

                        result = result.replace('0', '', counter);

                        octal = true;
                        counter = 0;
                     }
                  }
               }
            }
         }
      };

      secondaryDisplay.value = result;

      result = eval(result);
      writeResult(result, calculated, hadError);

   } catch (err) {

      console.log(err);
      error(display, calculated, hadError);
   }
};