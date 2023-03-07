// import { printError, printResult } from '../printResult.js';
import { printResult } from './printResult.js';
import { timeStep } from './timeStep.js';
// import dataFromObj from './getTimeDiff.js';
import { DateTime } from '../luxon.js';


export const timerForm = document.getElementById("timercalc");

//export const formData ;

timerForm.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const time = formData.get('totalTime');
  
    let timeObj = DateTime.fromISO(time);

    timeStep(timeObj);


   // getTimeDiff(time);


   // let dataFromObj = DateTime.fromISO(time);

  //  dataFromObj = DateTime.fromISO(time);

 

    

    // setInterval(() => {
    //   console.log(dataFromObj.second)
    //   return dataFromObj.minus(1000)
    //   }, 1000);
  

   // setInterval(printResult(timeStep(time)), 1000);
  
   
    
  // result.innerText = setInterval(printResult(timeStep(time)), 1000);
   
}
