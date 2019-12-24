function registerCars (production) {

    let makes = {};

    for (let i = 0; i < production.length; i++){
        let data = production[i].split(" | ");
        let make = data[0];
        let model = data[1];
        let quantity = Number(data[2]);

        if(!makes.hasOwnProperty(make)){
            makes[make] = {};
        }

        if(!makes[make].hasOwnProperty(model)){
            makes[make][model] = 0;
        }

        makes[make][model] += quantity;
    }

    let keys = Object.getOwnPropertyNames(makes);

    for (let make of keys){
        console.log(make);
        let models = Object.getOwnPropertyNames(makes[make]);

        for(let model of models){
            console.log(`###${model} -> ${makes[make][model]}`);
        }
    }
}

registerCars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);

