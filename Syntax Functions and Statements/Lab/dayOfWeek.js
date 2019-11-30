var daysOfWeek = new Map();

daysOfWeek.set("Monday", 1)
daysOfWeek.set("Tuesday", 2)
daysOfWeek.set("Wednesday", 3)
daysOfWeek.set("Thursday", 4)
daysOfWeek.set("Friday", 5)
daysOfWeek.set("Saturday", 6)
daysOfWeek.set("Sunday", 7)

function getDayNumber(day){

    let value = daysOfWeek.get(day);
    
    value === undefined ? console.log("error") : console.log(value);
}

getDayNumber("Monday")