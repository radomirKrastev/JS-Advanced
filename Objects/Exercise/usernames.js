function orderUsernamesAndRemoveDuplicates(data) {

    function sortAscending(a, b){
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
    }

    let usernames = [...new Set(data)];
    
    for (let username of usernames.sort(function(a, b){
        return sortAscending(a.length, b.length) || (sortAscending(a, b));
    })){
        console.log(username);
    }
}

orderUsernamesAndRemoveDuplicates(['Ashton',
'Kutcher',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']
);

orderUsernamesAndRemoveDuplicates(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Isacc',
'Indie',
'Indie',
'Dean',
'Donatello',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']
);