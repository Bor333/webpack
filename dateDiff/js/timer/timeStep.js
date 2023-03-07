import { DateTime } from '../luxon.js';
import { printResult } from '../printResult.js';
// import dataFromObj from './main.js';
// import {formData} from './main.js';
// let dataFromObj = new DateTime;





    
    export function timeStep(timeObj) {
        console.log(timeObj);
        timeObj = timeObj.minus(1000);
        return setInterval(timeStep(timeObj), 1000);
        return timeStep(timeObj);
    }
    
    


// export const getTimeDiff = (time) => {
//     let dataFromObj = DateTime.fromISO(time);

//     setInterval(timeStep(), 1000);
       
    
//     function timeStep() {
//         // dataFromObj.second;
//        // dataFromObj = dataFromObj.minus(1000);
//         console.log(dataFromObj.second);
//         return dataFromObj.minus(1000);
//     }
    
//     // export default dataFromObj
// }

