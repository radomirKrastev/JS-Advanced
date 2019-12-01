function calculateFruitCost(...params) {

    let fruit = params[0];
    let kilograms = params[1] / 1000;
    let cost = params[2];
    let price = kilograms * cost;

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruitCost('orange', 2500, 1.8);