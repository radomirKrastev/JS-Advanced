let manager = (function () { 
    let robot = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    let recepies = {};
    recepies.apple = { carbohydrate: 1, flavour: 2 };
    recepies.lemonade = { carbohydrate: 10, flavour: 20 };
    recepies.burger = { carbohydrate: 5, fat: 7, flavour: 3 };
    recepies.eggs = { protein: 5, fat: 1, flavour: 1 };
    recepies.turkey = { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 };    

    return function reader(input) {
        let result = "";
        robot.restock = function (microelement, quantity) {
            robot[microelement] += quantity;
            result = "Success";
        };

        robot.report = function () {
            result = `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        };

        robot.prepare = function (recipe, quantity) {
            for (let i = 1; i <= quantity; i++) {
                let keys = Object.getOwnPropertyNames(recepies[recipe]);
                let missingIngradient = keys.find(x => robot[x] === 0);

                if (missingIngradient) {
                    result = `Error: not enough ${missingIngradient} in stock`;
                    return;
                }

                keys.forEach(x => robot[x] -= recepies[recipe][x]);
            }

            result = "Success";
        };

        if (input) {
            let command = input.split(" ");
            robot[command[0]](command[1], Number(command[2]));
        } else {
            robot.report();
        }

        return result;
    };
}());

console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock
manager("restock carbohydrate 10");
manager("restock flavour 10");
manager("prepare apple 1");
manager("restock fat 10");
manager("prepare burger 1");
manager();