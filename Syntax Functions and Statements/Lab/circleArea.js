function findArea(radius) {

    var result;
    if(typeof(radius) == "number"){
        console.log((Math.PI * radius**2).toFixed(2))

        return;
    }
    
    console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);    
}

findArea("asdsaddsa");