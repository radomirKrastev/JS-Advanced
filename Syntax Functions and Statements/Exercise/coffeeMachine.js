function calculate(input) {
    let drinks = {
        coffeecaffeine: 0.80,
        coffeedecaf: 0.90,
        tea: 0.8
    };

    function milkAndSugarCost(orderParts, drink, price) {
        let sugarPrice = (b) => b > 0 ? 0.1 : 0;

        let additionalPrice = 0;

        if ((drink === "coffee" && orderParts.length == 5) || (drink === "tea" && orderParts.length == 4)) {
            var milkPrice = parseFloat((0.1 * price).toFixed(1));
            additionalPrice += milkPrice;
        }

        let sugars = parseInt(orderParts[orderParts.length - 1]);
        additionalPrice += sugarPrice(sugars);
        return additionalPrice;
    }

    let moneyMade = 0;

    for (let i = 0; i < input.length; i++) {

        var orderParts = input[i].split(", ");
        let coins = parseFloat(orderParts[0]);
        let drink = orderParts[1];
        let price = 0;

        if (drink === "coffee") {
            let type = orderParts[2];
            price += drinks[drink + type];
        }
        else {
            price += drinks[drink];
        }

        price += milkAndSugarCost(orderParts, drink, price);

        let change = coins - price;

        if (change >= 0) {
            console.log(`You ordered ${drink}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
            moneyMade += price;
        }
        else {
            console.log(`Not enough money for ${drink}. Need $${Math.abs(change).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${moneyMade.toFixed(2)}`);
}

calculate(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);