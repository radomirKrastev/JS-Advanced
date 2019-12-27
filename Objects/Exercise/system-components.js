function registerComponents(input) {
    let systemsArr = [];

    sortAlphabetical = function(a, b) {
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
    };

    sortByCount = function(a, b) {
        if (a > b) return -1;
        if (a < b) return +1;
        return 0;
    };

    printResult = function(systemsArr) {
        for (let system of systemsArr.sort(function(a, b) {
            return sortByCount(a.components.length, b.components.length) || sortAlphabetical(a.name, b.name);
        })){
            console.log(system.name);
    
            for (let component of system.components.sort(function(a, b) {
                return sortByCount(a.subComponents.length, b.subComponents.length);
            })){
                console.log(`|||${component.name}`);
                
    
                for(let subcomponent of component.subComponents) {
                    console.log(`||||||${subcomponent}`);
                }
            }
        }   
    };

    for (let i = 0; i < input.length; i++)
    {
        let systemData = input[i].split(" | ");
        let systemName = systemData[0];
        let componentName = systemData[1];
        let subComponent = systemData[2];

        if(!systemsArr.some(x => x.name === systemName)){
            let system = {};
            system.name = systemName;
            system.components = [];
            systemsArr.push(system);
        }

        let system = systemsArr.find(x => x.name === systemName);

        if(!system.components.some(x => x.name === componentName)){
            let component = {};
            component.name = componentName;
            component.subComponents = [];
            system.components.push(component);
        }
        
        let component = system.components.find(x => x.name === componentName);
        component.subComponents.push(subComponent);
    }

    printResult(systemsArr);   
}

registerComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);