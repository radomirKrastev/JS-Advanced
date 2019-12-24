//@ts-check

function registerHero(heroes) {

    let heroesData = [];

    for (let i = 0; i < heroes.length; i++) {
        let data = heroes[i].split(" / ");
        let name = data[0];
        let level = +data[1];

        let hero = {};
        hero.name = name;
        hero.level = level;
        hero.items = [];
        
        if (data.length > 2) {
            let items = data[2].split(", ");
            hero.items = items;
        }       

        heroesData.push(hero);
    }

    console.log(JSON.stringify(heroesData));
}

registerHero(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 0 / Desolator, Sentinel, Antara']
);