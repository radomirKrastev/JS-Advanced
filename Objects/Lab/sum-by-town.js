function sumTownsIncome(data) {

    let townsIncome = {};

    for (i = 0; i < data.length; i += 2){
        let name = data[i];
        let income = +data[i + 1];

        if(!townsIncome[name]){
            townsIncome[name] = 0;
        }

        townsIncome[name] += income;
    }

    console.log(JSON.stringify(townsIncome));
}

sumTownsIncome(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']
);

sumTownsIncome(['Sofia',
'20',
'Varna',
'3',
'sofia',
'5',
'varna',
'4']
);