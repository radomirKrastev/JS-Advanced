class Kitchen {
    budget;
    menu;
    productsInStock;
    actionsHistory;

    constructor(budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.menu = {};
        this.actionsHistory = [];
    }

    _getObjKeysCount(obj) {
        return Object.keys(obj).length;
    }

    loadProducts(productsToLoad) {
        productsToLoad.forEach(product => {
            let parts = product.split(" ");
            let productName = parts[0];
            let productQuantity = Number(parts[1]);
            let productPrice = Number(parts[2]);

            if (this.budget >= productPrice) {
                this.budget -= productPrice;

                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join("\r\n");
    }

    addToMenu(meal, products, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] =
                {
                    'products': products,
                    'price': price
                };
            return `Great idea! Now with the ${meal} we have ${this._getObjKeysCount(this.menu)} meals in the menu, other ideas?`;
        }

        return `The ${meal} is already in our menu, try something different.`;
    }

    showTheMenu() {
        if (this._getObjKeysCount(this.menu) > 0) {
            let a = Object.entries(this.menu);
            return Object.entries(this.menu)
                .map(meal => `${meal[0]} - $ ${meal[1].price}`)
                .join('\n') + '\n';
        }

        return "Our menu is not ready yet, please come later...";
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        if (!this._productsAreAvailable(this.menu[meal].products)) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this._cookMeal(meal);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }

    _cookMeal(meal) {
        this.menu[meal].products.forEach(x => {
            const [product, quantity] = x.split(" ");
            this.productsInStock[product] -= quantity;
            this.budget += this.menu[meal].price;
        });
    }

    _productsAreAvailable(productsNeeded) {
        if(productsNeeded.some(x => {
            const [product, quantity] = x.split(" ");

            if(!this.productsInStock.hasOwnProperty(product) || this.productsInStock[product] < quantity){
                return true;
            }            
        })) {
            return false;
        }

        return true;
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder("Pizza"));