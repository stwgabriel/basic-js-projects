//
const [startButton, pauseButton, resumeButton, stopButton] = document.querySelectorAll('.options button');
let [hours, minutes, seconds] = document.querySelectorAll('.timer-display input');
let interval;
let count;

function refreshTimer() {

   count = count - 1;

   let newhour = (count / 60) / 60,
      newminute = ((count / 60) % 60),
      newsecond = (count % 60);

   let stringHour = Math.floor(newhour).toString(),
      stringMinute = Math.floor(newminute).toString(),
      stringSecond = Math.floor(newsecond).toString();

   stringHour.length < 2 ? hours.value = '0' + stringHour : hours.value = Number(stringHour);
   stringMinute.length < 2 ? minutes.value = '0' + stringMinute : minutes.value = Number(stringMinute);
   stringSecond.length < 2 ? seconds.value = '0' + stringSecond : seconds.value = Number(stringSecond);

   count == 0 && stopTime()
}

function startTime() {

   let [timerHour, timerMinute, timerSecond] = [hours.value, minutes.value, seconds.value];
   count = ((timerHour * 60) * 60) + (timerMinute * 60) + timerSecond;

   if (timerHour == false && timerMinute == false && timerSecond == false) {

      return
   }


   interval = setInterval(() => {

      if (count == false) {

         clearInterval(interval);
         return
      }

      refreshTimer()

   }, 1000);

   startButton.classList.contains('visible') && startButton.classList.remove('visible')
   startButton.classList.add('hidden');

   pauseButton.classList.contains('hidden') && pauseButton.classList.remove('hidden');
   pauseButton.classList.add('visible');

   stopButton.classList.contains('hidden') && stopButton.classList.remove('hidden');
   stopButton.classList.add('visible')

   setReadonly()
}

function pauseTime() {

   clearInterval(interval);

   pauseButton.classList.contains('visible') && pauseButton.classList.remove('visible');
   pauseButton.classList.add('hidden');

   resumeButton.classList.contains('hidden') && resumeButton.classList.remove('hidden');
   resumeButton.classList.add('visible');
}

function resumeTime() {

   interval = setInterval(() => {

      if (count == false) {

         clearInterval(interval);
         return
      }

      refreshTimer();

   }, 1000);

   resumeButton.classList.contains('visible') && resumeButton.classList.remove('visible');
   resumeButton.classList.add('hidden');

   pauseButton.classList.contains('hidden') && pauseButton.classList.remove('hidden');
   pauseButton.classList.add('visible')
}

function stopTime() {

   clearInterval(interval);
   [hours.value, minutes.value, seconds.value] = ['', '', ''];

   resumeButton.classList.contains('visible') && resumeButton.classList.remove('visible');
   resumeButton.classList.contains('hidden') ? '' : resumeButton.classList.add('hidden');

   pauseButton.classList.contains('visible') && pauseButton.classList.remove('visible');
   pauseButton.classList.contains('hidden') ? '' : pauseButton.classList.add('hidden');

   stopButton.classList.contains('visible') && stopButton.classList.remove('visible');
   stopButton.classList.contains('hidden') ? '' : stopButton.classList.add('hidden')

   startButton.classList.contains('hidden') && startButton.classList.remove('hidden')
   startButton.classList.contains('visible') ? '' : startButton.classList.add('visible');


   unsetReadonly();
   checkFields()
}

function setReadonly() {

   hours.setAttribute('readonly', 'readonly');
   minutes.setAttribute('readonly', 'readonly');
   seconds.setAttribute('readonly', 'readonly');
}

function unsetReadonly() {

   hours.removeAttribute('readonly', 'readonly')
   minutes.removeAttribute('readonly', 'readonly');
   seconds.removeAttribute('readonly', 'readonly');
}

function checkFields() {

   if (hours.value != false || minutes.value != false || seconds.value != false) {

      startButton.classList.contains('disable') && startButton.classList.remove('disable');
      startButton.classList.add('active');
   } else {

      startButton.classList.contains('active') && startButton.classList.remove('active');
      startButton.classList.add('disable');
   }
}

checkFields();

hours.addEventListener("change", () => { checkFields() });
minutes.addEventListener("change", () => { checkFields() });
seconds.addEventListener("change", () => { checkFields() });