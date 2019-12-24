function bottleJuices(juicesInput) {

    let juices = [];
    let bottledJuices = [];

    for (let i = 0; i < juicesInput.length; i++){
        let data = juicesInput[i].split(" => ");
        let fruit = data[0];
        let quantity = parseFloat(data[1]);

        if(!juices.some(x => x.name === fruit)){
            let juice = {};
            juice.name = fruit;
            juice.quantity = 0;
            juice.bottles = 0;
            juices.push(juice);
        }

        let juice = juices.find(x => x.name === fruit);
        juice.quantity += quantity;
        juice.bottles += parseInt(juice.quantity / 1000);
        juice.quantity = juice.quantity % 1000;

        if(!bottledJuices.some(x => x.name === fruit) && juice.bottles >= 1){
            bottledJuices.push(juice);
        }
    }

    for (let juice of bottledJuices){
        console.log(`${juice.name} => ${juice.bottles}`);
    }
}

bottleJuices(['Orange => 567',
'Orange => 567',
'Orange => 567',
'Orange => 567',
'Orange => 567']
);

bottleJuices(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);