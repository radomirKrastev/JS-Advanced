function radar(data) {

    let roads = { motorway: 130, interstate: 90, city: 50, residential: 20 };

    let speed = data[0];
    let road = data[1];
    let legalSpeed = roads[road];
    let speeding = speed - legalSpeed;

    if (speeding > 0) {
        if (speeding <= 20) {
            console.log("speeding");
        }
        else if (speeding <= 40) {
            console.log("excessive speeding");
        }
        else {
            console.log("reckless driving");
        }
    }
}

radar([21, 'residential']);