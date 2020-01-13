function solve() {
    let rows = [...document.querySelectorAll("tbody tr")];
    let rowCells = rows.map(x => [...x.querySelectorAll("td")]);
    let quickCheck = document.querySelectorAll("button")[0];

    let checkForUniqueValuesInLimits = function (arr) {
        arr.filter(x => x >= 1 && x <= 3);

        for (let row of arr) {
            if (new Set(row.slice().filter(x => x >= 1 && x <= 3)).size !== arr.length){
                return false;
            }            
        }
        
        return true;
    };

    let check = function () {
        let rowsAreValid = true;
        //check row values

        let filledRows = rowCells
        .map(r => r.map(c => c = Number(c.querySelector("input").value)));
        //.filter(x => x >= 1 && x <= 3);

        // for (let row of rowCells) {
        //     // if (row.map(x => Number(x.textContent).reudce((a, b) => a + b, 0)) === 6 
        //     // && (new Set(row.map(Number(x.textContent)).filter(x => x >= 1 && x <= 3))).size !== array.length)
        //     console.log(row);

        //     if ((new Set(row
        //         .map(r => Number(r.querySelector("input").value))
        //         .filter(x => x >= 1 && x <= 3))).size !== row.length) {
        //         rowsAreValid = false;
        //         return;
        //     }
        // }

        console.log(rowsAreValid);

        let cols = rowCells.reduce(function (result, r, i) {
            for (let cell of r) {
                console.log(Number(cell.querySelector("input").value));
                result[i].push(Number(cell.querySelector("input").value));
            }

            return result;
        }, [[],[],[]]);

        console.log(cols);

        if (checkForUniqueValuesInLimits(filledRows) && checkForUniqueValuesInLimits(cols)){
            let output = document.querySelector("div[id='check']");
            output.textContent = "You solve it! Congratulations!";
            console.log("EVERYTHING IS PERFECT, BRO, NO WORRIES");
        } else {
            console.log("YOU FUCKED UP SOMETHING!!!");
        }
    };

    quickCheck.addEventListener("click", check);
}