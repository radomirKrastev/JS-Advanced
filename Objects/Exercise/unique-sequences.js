function printUniqueSequences(data) {
    
    function sortAscending(a, b){
        if(a > b) return +1;
        if(a < b) return -1;
        return 0;
    }

    function sortDescending(a, b){
        if(a > b) return -1;
        if(a < b) return +1;
        return 0;
    }

    let sequencesSet = new Set();

    for(let i = 0; i < data.length; i++){

        let sequence = JSON.parse(data[i]).sort(function(a, b){
            return sortDescending(a, b);
        });

        sequencesSet.add(sequence.join(", "));
    }

    let uniqueSequences = [...sequencesSet];
    uniqueSequences = uniqueSequences.map(x => x.split(", ").map(y => Number(y)));
    
    for(let sequence of uniqueSequences.sort(function(a, b){
        return sortAscending(a.length, b.length);
    })){
        console.log(JSON.stringify(uniqueSequences));
        console.log("[" + sequence.join(", ") + "]");
    }
}

printUniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[10, 1, -17, 0, 2, -500]",
"[10, 1, -17, 0, 2, 453]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);