function registerPopulation(data) {

    let townsPopulation = {};

    for(i = 0; i < data.length; i++){
        let cityInfo = data[i].split("<->").filter(x => x !== "").map(x => x.trim());
        let city = cityInfo[0];
        let population = +cityInfo[1];

        if(!townsPopulation[city]){
            townsPopulation[city] = 0;
        }

        townsPopulation[city] += population;
    }

    let keys = Object.getOwnPropertyNames(townsPopulation);

    for(let town of keys){
        let population = townsPopulation[town];

        console.log(`${town} : ${population}`);
    }
}

registerPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);