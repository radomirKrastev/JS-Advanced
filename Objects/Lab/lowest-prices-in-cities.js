function printProductsLowestPrice(data) {

    function addProductToTown(towns, productsSet) {
        for (i = 0; i < data.length; i++) {
            let productInfo = data[i].split("|").filter(x => x !== "").map(x => x.trim());
            let townName = productInfo[0];
            let product = productInfo[1];
            let price = parseFloat(productInfo[2]);

            productsSet.add(product);

            if (!towns.hasOwnProperty(townName)) {
                towns[townName] = {};
            }

            towns[townName][product] = price;
        }
    }

    function printResult(towns, productsSet) {
        var townKeys = Object.getOwnPropertyNames(towns);

        for (let currentProduct of productsSet) {
            var townWithBestPrice = "";
            var bestPrice = Number.MAX_VALUE;

            for (let town of townKeys) {
                if (!towns[town].hasOwnProperty(currentProduct)) {
                    continue;
                }

                if (bestPrice > towns[town][currentProduct]) {
                    bestPrice = towns[town][currentProduct];
                    townWithBestPrice = town;
                }
            }

            console.log(`${currentProduct} -> ${bestPrice} (${townWithBestPrice})`);
        }
    }

    let towns = {};
    let products = new Set();

    addProductToTown(towns, products);
    printResult(towns, products);
}

printProductsLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);