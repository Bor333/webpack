// import {timerInput} from './main.js';

export const timeStep = (timerOn) => { 
    let timerShow = document.getElementById("timer"); 
    let timerInput = document.getElementById("time");
    let timeMinut = parseInt(timerInput.value) * 60;
    console.log(timerShow);
    timerOn = true;
  
    const timer = setInterval(function () {
      let seconds = timeMinut % 60;
      let minutes = timeMinut / 60 % 60;
      let hour = timeMinut / 60 / 60 % 60;
  

      if (timeMinut <= 0) {
        clearInterval(timer);
        timerShow.innerText= "Время закончилось";
      } else if (timerOn) {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
      }
      --timeMinut;
    }, 1000)
    

  }

