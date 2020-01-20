class List {
    _collection;
    size;
    constructor() {
        this._collection = [];
        this.size = this._collection.length;
    }

    // get size() {
    //     return this._collection.length;
    // }
    
    sortCollection() {
        this._collection.sort((a, b) => a - b);
    }

    validateIndex(index) {
        return index >= 0 && index < this._collection.length;
    }

    add(element) {
        this._collection.push(element);
        this.sortCollection();
        this.size = this._collection.length;
    }

    remove(index) {
        if(this.validateIndex(index)){
            this._collection.splice(index, 1);
            this.sortCollection();
            this.size = this._collection.length;
        }
    }

    get(index) {
        if (this.validateIndex(index)){
            return this._collection[index];
        }
    }    
}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));
// let size = list.size;