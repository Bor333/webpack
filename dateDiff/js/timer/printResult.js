const result = document.getElementById("timer__result");

export let printResult = (time) => {
    result.innerText = `Осталось Часов: ${time.hour} - Минут: ${time.minute} - Секунд: ${time.second} `;
    
}