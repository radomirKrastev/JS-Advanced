const Extensible = (function(){
    let id = 0;
    
    return class Extensible{
        constructor() {
            this.id = id++;
        }

        extend(template) {
            Object.entries(template)
            .forEach(([key, value]) => {
                if (typeof value === 'function'){
                    Object.getPrototypeOf(this)[key] = value;
                } else {
                    this[key] = value;
                }
            });
        }
    };    
}());

// let obj1 = new Extensible();
// let obj2 = new Extensible();
// obj1.extend({
//     extensionMethod: function () {},
//     extensionProperty: 'someString'
// });
