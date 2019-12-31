function play(positions) {
    function validatePosition(row, col, field) {
        return row < field.length && row >= 0 && col < field[row].length && col >= 0;
    }

    function validateMovesAvailable(field) {
        return field.flat(1).includes(false);
    }

    function checkIfPlayerWonByColumns(player) {
        return player.tags.some((value, i) => value === (i + 1) * 3);
    }

    function checkIfPlayerWonByRowsOrDiagonal(field, tag) {
        let wonByRows = field.some(x => x.every((value) => value === tag));
        let wonByFirstDiagonal = field.every((row, i) => row[i] === tag);
        let wonBySecondDiagonal = field.every((row, i) => row[row.length - 1 - i] === tag);

        return wonByRows || wonByFirstDiagonal || wonBySecondDiagonal;
    }

    function printField(field) {
        let message = field.reduce(function(result, row){
            result += row.join("\t") + "\r\n";
            return result;
        }, "");
        
        return message;
    }

    function draw() {
        let message = "";
        let field = [[Boolean(), Boolean(), Boolean()],
        [Boolean(), Boolean(), Boolean()],
        [Boolean(), Boolean(), Boolean()]];
        let players = [{ tag: "X", tags: new Array(3).fill(0) }, { tag: "O", tags: new Array(3).fill(0) }];
        let counter = 0;

        for (let i = 0; i < positions.length; i += 1) {            
            let row = +positions[i].split(" ")[0];
            let col = +positions[i].split(" ")[1];

            if (validatePosition(row, col, field)) {
                if (field[row][col] !== false) {
                    message += "This place is already taken. Please choose another!" + "\r\n";
                    continue;
                }

                let playerNumber = counter++ % 2 === 0 ? 0 : 1;
                let player = players[playerNumber];
                field[row][col] = player.tag;
                player.tags[col] += col + 1;

                if (checkIfPlayerWonByColumns(player) || checkIfPlayerWonByRowsOrDiagonal(field, player.tag)) {
                    message += `Player ${player.tag} wins!` + "\r\n" + printField(field);
                    break;
                }
            }

            if (!validateMovesAvailable(field)) {
                message += "The game ended! Nobody wins :(" + "\r\n" + printField(field);
                break;
            }
        }

        return message;
    }

    let outputMessage = draw();
    return outputMessage.trim();
}

console.log(play(["0 0",
"1 2",
"1 0", 
"0 0",
"1 0",
"0 0",
"1 1",
"2 0",
"0 2",
"0 0"]
));


// console.log(play(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// ));

// console.log(play(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// ));

// console.log(play(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]
// ));