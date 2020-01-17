function attachEventsListeners() {
    let convertor = {
        days: function (time, value) {
            time.hours.value = value * 24;
            time.minutes.value = value * 24 * 60;
            time.seconds.value = value * 24 * 60 * 60;
        },
        hours: function (time, value) {
            time.days.value = value / 24;
            time.minutes.value = value * 60;
            time.seconds.value = value * 60 * 60;
        },
        minutes: function (time, value) {
            time.days.value = value / 60 / 24;
            time.hours.value = value / 60;            
            time.seconds.value = value * 60;
        },
        seconds: function (time, value) {
            time.days.value = value / 60 / 60 / 24;
            time.hours.value = value / 60 / 60;            
            time.minutes.value = value / 60;
        }
    };

    let setTimes = function (e) {
        let parent = e.target.parentElement;
        let input = parent.querySelector("input[type='text']");

        if(input !== null && !isNaN(input.value)){
            let time = [...document.querySelectorAll("main div input[type='text']")]
            .filter(x => x!==input)
            .reduce(function(result, metric){
                result[metric.id] = metric;
                return result;
            },{});

            console.log(time);
            convertor[input.id](time, Number(input.value));
        }
    };

    let buttons = [...document.querySelectorAll("input[type='button']")];

    let convertHandler = function(e) {
        setTimes(e);
    };

    buttons.map(x => x.addEventListener("click", convertHandler));    
}