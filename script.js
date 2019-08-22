let startTime;

let tInterval;

let updateTime;

let difference;

let saveTime;

let running = 0;






function startTimer() {

    if (running == 0) {

        startTime = new Date().getTime();
        tInterval = setInterval(showTime, 1);
        running = 1;

    }

}

function stopTimer() {

    clearInterval(tInterval);
    saveTime = difference;
    running = 0;

}

function reset() {

    clearInterval(tInterval);
    saveTime = 0;
    difference = 0;
    running = 0;
    document.querySelector("#millisecond").innerHTML = "000";
    document.querySelector("#second").innerHTML = "00";
    document.querySelector("#minute").innerHTML = "00";
    document.querySelector("#hour").innerHTML = "00";

}

function showTime() {

    updateTime = new Date().getTime();

    if (saveTime) {

        difference = (updateTime - startTime) + saveTime;

    } else {

        difference = updateTime - startTime;

    }

    let millisecond = Math.floor((difference % (1000 * 60)) / 100);
    let second = Math.floor((difference % (1000 * 60)) / 1000);
    let minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    millisecond = (millisecond < 100) ? (millisecond < 10) ? `00${millisecond}` : `0${millisecond}` : millisecond;
    document.querySelector("#millisecond").innerHTML = millisecond;
    second = (second < 10) ? `0${second}` : second;
    document.querySelector("#second").innerHTML = second;
    minute = (minute < 10) ? `0${minute}` : minute;
    document.querySelector("#minute").innerHTML = minute;
    hour = (hour < 10) ? `0${hour}` : hour;
    document.querySelector("#hour").innerHTML = hour;

}