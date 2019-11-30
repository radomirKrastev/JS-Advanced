function solve(...params) {

    let steps = params[0];
    let meters = params[1];
    let speed = params[2];

    let kilometers = (steps * meters) / 1000;
    let secondsPerKilometer = (60 / speed) * 60;
    let breaksTotalSeconds = Math.floor((kilometers / 0.5)) * 60;

    let totalSeconds = Math.round((secondsPerKilometer * kilometers) + breaksTotalSeconds);

    let date = new Date(null);
    date.setSeconds(totalSeconds);
    let timeString = date.toISOString().substr(11, 8);
    console.log(timeString)
}

solve(4000, 0.6, 5)