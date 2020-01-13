function solve() {
    let rows = [...document.querySelectorAll("tbody tr")];
    let rowCells = rows.map(x => [...x.querySelectorAll("td")]);
    let quickCheck = document.querySelectorAll("button")[0];
    let clearButton = document.querySelectorAll("button")[1];

    let checkForUniqueValuesInLimits = function (arr) {
        for (let row of arr) {
            if (new Set(row.slice().filter(x => x >= 1 && x <= 3 && x % 1 === 0)).size !== arr.length){
                return false;
            }            
        }
        
        return true;
    };

    let checkResult = function () {
        let filledRows = rowCells
        .map(r => r.map(c => c = Number(c.querySelector("input").value)));

        let cols = rowCells.reduce(function (result, r) {
            let i = 0;
            for (let cell of r) {
                result[i++].push(Number(cell.querySelector("input").value));
            }

            return result;
        }, [[],[],[]]);

        let output = document.querySelector("div[id='check'] p");
        let table = document.querySelector("table");

        if (checkForUniqueValuesInLimits(filledRows) && checkForUniqueValuesInLimits(cols)){
            table.style.border = "2px solid green";
            output.textContent = "You solve it! Congratulations!";
            output.style.color = "green";
        } else {
            table.style.border = "2px solid red";
            output.textContent = "NOP! You are not done yet...";
            output.style.color = "red";
        }
    };

    let clear = function() {
        location.reload();
    };

    quickCheck.addEventListener("click", checkResult);
    clearButton.addEventListener("click", clear);
}

//this solution gives 84/100 in judge. No idea why :/