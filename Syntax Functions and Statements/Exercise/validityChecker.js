function check(points) {

    x1 = points[0];
    y1 = points[1];
    x2 = points[2];
    y2 = points[3];

    let firstPointToStart = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let secondPointToStart = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
    let firstToSecond = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    let checkDistance = (distance, x1, y1, x2, y2) =>
        Number.isInteger(distance) ?
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) :
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    checkDistance(firstPointToStart, x1, y1, 0, 0);
    checkDistance(secondPointToStart, x2, y2, 0, 0);
    checkDistance(firstToSecond, x1, y1, x2, y2);
}

check([2, 1, 1, 1]);