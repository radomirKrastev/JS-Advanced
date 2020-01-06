let calculateBodyMassIndex = function (...params) {
    let obj = {};
    obj.name = params[0];
    obj.personalInfo = {age: params[1], weight: params[2], height: params[3]};
    obj.BMI = Math.round(obj.personalInfo.weight / Math.pow(parseFloat(obj.personalInfo.height / 100), 2));

    (function () {
        if (obj.BMI < 18.5) {
            obj.status = "underweight";
        } else if (obj.BMI < 25) {
            obj.status = "normal";
        } else if (obj.BMI < 30){
            obj.status = "overweight";
        } else if (obj.BMI >= 30){
            obj.status = "obese";
            obj.recommendation = "admission required";
        }
    }());

    return obj;
};


console.log(calculateBodyMassIndex("Peter", 29, 75, 182));
console.log(calculateBodyMassIndex("Honey Boo Boo", 9, 57, 137));



