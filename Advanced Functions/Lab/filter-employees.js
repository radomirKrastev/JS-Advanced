function solve(data, criteria) {
    function isValid(obj, criteriaType, ciretiaValue) {
        if (obj.hasOwnProperty(criteriaType)){
            return obj[criteriaType] === ciretiaValue;
        }

        return false;
    }

    function curryStr(i) {
        return(firstName) => {
            return(lastName) => {
                return(email) => {
                    return i + `${firstName} ${lastName} - ${email}`;                
                };
            };
        };
    }

    function getStr(obj, i) {
        let result = curryStr(`${i}. `);
        let keys = Object.getOwnPropertyNames(obj);
        for (let k = 1; k < keys.length - 1; k++) {
            result = result(obj[keys[k]]);
        }

        return result;
    }

    function getStrArrOfEmployees(arr) {
        return arr.reduce(function(result, obj, i) {
            result[i] = getStr(obj, i);
            return result;
        }, []);
    }

    let employees = JSON.parse(data);
    let criteriaData = criteria.split("-");
    let criteriaType = criteriaData[0];
    let criteriaValue = criteriaData.length > 1 ? criteriaData[1] : "";

    let filteredEmployees = employees
    .filter(x => criteriaType === 'all' ? x : isValid(x, criteriaType, criteriaValue));
    return getStrArrOfEmployees(filteredEmployees).join("\r\n");    
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all'
));