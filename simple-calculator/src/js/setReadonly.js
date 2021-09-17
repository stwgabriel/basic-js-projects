
export function readOnly(display) {

   display.addEventListener('change', () => {

      console.log('set');
      display.setAttribute('readonly', 'readonly')
   })
}
