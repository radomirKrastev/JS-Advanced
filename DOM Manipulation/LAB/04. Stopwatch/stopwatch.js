function stopwatch() {
    let getElement = function (element) {
        return document.querySelector(element);
    };

    let countTime = function () {
        let stopTime = function() {
            stop.disabled = true;
            start.disabled = false;
            clearInterval(interval);             
        };

        start.disabled = true;
        stop.disabled = false;
        let time = getElement("#time");
        let timeParts = time.innerHTML = "00:00";
        let minutes = Number(timeParts[0]);
        let seconds = Number(timeParts[1]);

        let interval = setInterval(
            function () {
                seconds++;

                if (minutes <= 59 && seconds < 60) {
                    let minutesTxt = `${minutes}`;
                    let secondsTxt = `${seconds}`;

                    if (minutes < 10){
                        minutesTxt = `0${minutes}`;
                    }

                    if (seconds < 10) {
                        secondsTxt = `0${seconds}`;
                    }

                    time.innerHTML = `${minutesTxt}:${secondsTxt}`;
                } else if (minutes < 59 && seconds === 60) {
                    minutes++;
                    seconds = 0;
                    let minutesTxt = `${minutes}`;

                    if (minutes < 10){
                        minutesTxt = `0${minutes}`;
                    }

                    time.innerHTML = `${minutesTxt}:00`;
                }
                
                console.log("1 sec. passed");
            }, 1000
        );

        stop.addEventListener("click", stopTime);
    };    

    let start = getElement("#startBtn");
    let stop = getElement("#stopBtn");

    start.addEventListener("click", countTime);    
}