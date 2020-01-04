function solution() {
    let obj = {};
    obj.text = "";

    obj.append = function(str) {
        obj.text += str;
    };

    obj.removeStart = function(count) {
        obj.text = obj.text.substring(count);
    };
    
    obj.removeEnd = function(count) {
        obj.text = obj.text.substring(0, obj.text.length - count);
    };

    obj.print = function() {
        console.log(obj.text);
    };

    return obj;
}


let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();