function composeObjects(data) {

    let foods = [];

    for (i = 0; i < data.length - 1; i += 2) {

        let food = data[i];
        let calories = data[i + 1];

        var object = {};
        object[food] = calories;
        foods.push(object);
    }

    let resultArray = [];

    foods.forEach(element => {
        for (let [key, value] of Object.entries(element)) {
            resultArray.push(`${key}: ${value}`);
        }
    });


    console.log(`{ ${resultArray.join(", ")} }`);
}

composeObjects(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);