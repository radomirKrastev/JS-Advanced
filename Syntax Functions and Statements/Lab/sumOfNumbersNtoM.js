function solve(n, m) {
    let result = 0;
    let start = Number(n);
    let end = Number(m);

    for (i = start; i <= end; i++) {
        result += i;
    }

    console.log(result)
}

solve(1, 5)