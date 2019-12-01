function cook(data) {

    let action = {
        chop: function (x) {

            return x / 2;
        },
        dice: function (x) {
            return Math.sqrt(x);
        },
        spice: function (x) {
            return x + 1;
        },
        bake: function (x) {
            return x * 3;
        },
        fillet: function (x) {
            return x * 0.8;
        },
    };

    let number = parseInt(data[0]);

    for (i = 1; i < data.length; i++) {
        number = action[data[i]].call(action, number);

        console.log(number);
    }
}

cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);