function calculateProductsIncome(data) {
    let towns = {};

    function addProductToTown(towns) {
        for (i = 0; i < data.length; i++) {
            let townInfo = data[i].split("->").filter(x => x !== "").map(x => x.trim());
            let name = townInfo[0];
            let product = townInfo[1];
            let sales = townInfo[2].split(" : ").map(x => parseFloat(x));
            let quantity = sales[0];
            let price = sales[1];

            if (!towns[name]) {
                let products = {};
                products[product] = price * quantity;
                towns[name] = products;
            } else {
                towns[name][product] = price * quantity;
            }
        }
    }

    function printIncomes(towns) {
        let townNames = Object.getOwnPropertyNames(towns);

        for (let town of townNames) {
            console.log(`Town - ${town}`);
            let productNames = Object.getOwnPropertyNames(towns[town]);

            for (let product of productNames) {
                let income = towns[town][product];

                console.log(`$$$${product} : ${income}`);
            }
        }
    }

    addProductToTown(towns);
    printIncomes(towns);
}

calculateProductsIncome(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);