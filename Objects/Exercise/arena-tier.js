function printGladiators(input) {

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

    function fight(arenaGladiators, input) {

        let gladiatorsFighting = input.split(" vs ");
        let firstGladiator = arenaGladiators.find(x => x.name === gladiatorsFighting[0]);
        let secondGladiator = arenaGladiators.find(x => x.name === gladiatorsFighting[1]);
        
        if (firstGladiator != null && secondGladiator != null && firstGladiator.techniques.some(x => findCommonTechnique(x.name, secondGladiator.techniques))) {

            let firstGladiatorTotalSkills = getTotalSkill(firstGladiator.techniques);
            let secondGladiatorTotalSkills = getTotalSkill(secondGladiator.techniques);
            let loser = firstGladiator;

            if (secondGladiatorTotalSkills < firstGladiatorTotalSkills) {
                loser = secondGladiator;
            }

            let index = arenaGladiators.indexOf(loser);

            if (index > -1) {
                arenaGladiators.splice(index, 1);
            }
        }
    }

    function addTechnique(arenaGladiators, input) {

        let data = input.split(" -> ");
        let gladiatorName = data[0];
        let techniqueName = data[1];
        let skill = Number(data[2]);

        let gladiator = arenaGladiators.find(x => x.name === gladiatorName);

        if (gladiator == null) {
            gladiator = {};
            gladiator.name = gladiatorName;
            gladiator.techniques = [];
            arenaGladiators.push(gladiator);
        }

        let technique = gladiator.techniques.find(x => x.name === techniqueName);

        if (technique == null) {
            technique = {};
            technique.name = techniqueName;
            technique.skill = 0;
            gladiator.techniques.push(technique);
        }

        if (technique.skill < Number(skill)) {
            technique.skill = Number(skill);
        }
    }

    function findCommonTechnique(techniqueName, techniquesArr) {
        return techniquesArr.some(x => x.name === techniqueName);
    }

    function getTotalSkill(techniques) {
        let totalSkill = 0;

        for (let technique of techniques) {
            totalSkill += technique.skill;
        }

        return totalSkill;
    }

    let arenaGladiators = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "Ave Cesar") {
            break;
        } else if (input[i].includes(" -> ")) {
            addTechnique(arenaGladiators, input[i]);
        } else if (input[i].includes(" vs ")) {
            fight(arenaGladiators, input[i]);
        }
    }

    for (let gladiator of arenaGladiators.sort(function(a, b) {
        return sortDescending(getTotalSkill(a.techniques), getTotalSkill(b.techniques)) || sortAscending(a.name, b.name);
    })){
        console.log(`${gladiator.name}: ${getTotalSkill(gladiator.techniques)} skill`);

        for(let technique of gladiator.techniques.sort(function(a, b) {
            return sortDescending((a.skill), (b.skill)) || sortAscending(a.name, b.name);
        })){
            console.log(`- ${technique.name} <!> ${technique.skill}`);
        }
    }    
}

printGladiators(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar']);

printGladiators(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);