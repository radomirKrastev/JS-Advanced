function gcd(a, b) {
    "use strict";
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

function print(a, b) {

    console.log(gcd(a, b));
}

print(2154, 177);