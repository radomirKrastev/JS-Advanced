function registerProducts(input) {

    let catalogue = [];

    for (let i = 0; i < input.length; i++){
        let data = input[i].split(" : ");
        let name = data[0];
        let price = Number(data[1]);

        let product = {};
        product.name = name;
        product.price = price;

        catalogue.push(product);
    }

    let currentLetter = '0';
    
    for (let product of catalogue.sort((a, b) => a.name.localeCompare(b.name))){
        
        if (product.name[0] !== currentLetter){
            currentLetter = product.name[0];
            console.log(currentLetter);
        }

        console.log(`  ${product.name} : ${product.price}`);
    }    
}

registerProducts(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);