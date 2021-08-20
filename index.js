const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

let newDate = '2000-08-24';

function countdown() {
   const currentDate = new Date();
   let lookingDate = new Date(newDate);

   if (lookingDate < currentDate) {
      const date = newDate.slice(4);
      lookingDate = new Date(currentDate.getFullYear() + date);
      if (lookingDate < currentDate) {
         lookingDate = new Date((currentDate.getFullYear() + 1) + date);
      }
   }

   const totalSeconds = (lookingDate - currentDate) / 1000;
   daysEl.innerText = Math.floor(totalSeconds / 3600 / 24);
   hoursEl.innerText = formatTime(Math.floor(totalSeconds / 3600) % 24);
   minutesEl.innerText = formatTime(Math.floor(totalSeconds / 60) % 60);
   secondsEl.innerText = formatTime(Math.floor(totalSeconds) % 60);
}

function formatTime(time) {
   return time < 10 ? `0${time}` : time;
}

document.querySelector('#birthday').addEventListener('change', function (event) {
   newDate = event.target.value;
})

setInterval(countdown, 1000)
