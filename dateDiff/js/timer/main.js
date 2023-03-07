import {Howl} from 'howler';
import {timeStep} from './timeStep.js';


let buttonRun = document.getElementById("button");
let buttonStop = document.getElementById("stop");
let timerOn = false;
let timer = null;

buttonRun.addEventListener('click', timeStep(timerOn));

buttonStop.addEventListener('click',  () => {
  timerOn = false;
  timer = null;
  timerShow.innerHTML = null;
});
