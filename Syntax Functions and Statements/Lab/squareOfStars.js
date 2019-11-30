function draw(x) {

    let size;

    typeof (x) == "number" ? size = x : size = 5;

    for (i = 0; i < size; i++) {

        let result = "*".repeat(size).split("").join(" ");
        console.log(result);
    }

    return;
}

draw()