function attackKingdoms(kingdomsData, battles) {
    let kingdoms = [];

    function sortAscending(a, b) {
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
    }

    function sortDescending(a, b) {
        if (a > b) return -1;
        if (a < b) return +1;
        return 0;
    }

    function validInput(attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral) {
        if (attackingKingdom.name === defendingKingdom.name) {
            return false;
        } else if (attackingGeneral == null || defendingGeneral == null) {
            return false;
        }

        return true;
    }

    function validateKingdoms (attackingKingdom, defendingKingdom){
        if(attackingKingdom == null || defendingKingdom == null) {
            return false;
        }

        return true;
    }

    function getTotalWins(generals) {
        let totalWins = 0;

        for (let general of generals) {
            totalWins += general.wins;
        }

        return totalWins;
    }

    function getTotalLosses(generals) {
        let totalLosses = 0;

        for (let general of generals) {
            totalLosses += general.losses;
        }

        return totalLosses;
    }

    for (let i = 0; i < kingdomsData.length; i++) {

        let kingdom = kingdoms.find(x => x.name === kingdomsData[i].kingdom);

        if (kingdom == null) {
            kingdom = {};
            kingdom.name = kingdomsData[i].kingdom;
            kingdom.generals = [];
            kingdoms.push(kingdom);
        }

        let general = kingdom.generals.find(x => x.name === kingdomsData[i].general);

        if (general == null) {
            general = {};
            general.name = kingdomsData[i].general;
            general.army = 0;
            general.wins = 0;
            general.losses = 0;
            kingdom.generals.push(general);
        }

        general.army += kingdomsData[i].army;
    }

    for (let i = 0; i < battles.length; i++) {

        let attackingKingdomName = battles[i][0];
        let attackingGeneralName = battles[i][1];
        let defendingKingdomName = battles[i][2];
        let defendingGeneralName = battles[i][3];
        
        let attackingKingdom = kingdoms.find(x => x.name === attackingKingdomName);
        let defendingKingdom = kingdoms.find(x => x.name === defendingKingdomName);

        if(!validateKingdoms){
            continue;
        }

        let attackingGeneral = attackingKingdom.generals.find(x => x.name === attackingGeneralName);
        let defendingGeneral = defendingKingdom.generals.find(x => x.name === defendingGeneralName);

        if (validInput(attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral)) {

            if (attackingGeneral.army < defendingGeneral.army) {
                attackingGeneral.army = Math.floor(attackingGeneral.army * 0.9);
                attackingGeneral.losses++;
                defendingGeneral.army = Math.floor(defendingGeneral.army * 1.1);
                defendingGeneral.wins++;

            } else if (attackingGeneral.army > defendingGeneral.army) {
                attackingGeneral.army = Math.floor(attackingGeneral.army * 1.1);
                attackingGeneral.wins++;
                defendingGeneral.army = Math.floor(defendingGeneral.army * 0.9);
                defendingGeneral.losses++;
            }
        }
    }

    let winner = kingdoms.sort(function (a, b) {
        return sortDescending(getTotalWins(a.generals), getTotalWins(b.generals)) ||
            sortAscending(getTotalLosses(a.generals), getTotalLosses(b.generals)) ||
            sortAscending(a.name, b.name);
    })[0];

    console.log(`Winner: ${winner.name}`);

    for (let general of winner.generals.sort(function (a, b) {
        return sortDescending(a.army, b.army);
    })) {
        console.log(`/\\general: ${general.name}`);
        console.log(`---army: ${general.army}`);
        console.log(`---wins: ${general.wins}`);
        console.log(`---losses: ${general.losses}`);
    }
}

attackKingdoms([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);

attackKingdoms([{ kingdom: "Stonegate", general: "Ulric", army: 5000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "B", general: "Berinon", army: 110000 },
{ kingdom: "A", general: "Verinon", army: 10000 },
{ kingdom: "A", general: "Bojkata", army: 10000 },
{ kingdom: "Maiden Way", general: "Smehoron", army: 90000 }],
    [["A", "Verinon", "Maiden Way", "Smehoron"],
    ["B", "Berinon", "Maiden Way", "Smehoron"],
    ["A", "Verinon", "Stonegate", "Ulric"],
    ["A", "Verinon", "Stonegate", "Ulric"],
    ["B", "Berinon", "Stonegate", "Ulric"],
]
);



