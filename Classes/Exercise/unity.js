class Rat {
    name;
    _otherRats
    constructor(name) {
        this.name = name;
        this._otherRats = [];
    }

    unite(otherRat){
        let a = typeof(otherRat);
        if(otherRat instanceof Rat){
            this._otherRats.push(otherRat);
        }
    }

    getRats(){
        return this._otherRats;
    }

    toString() {
        let result = this.name;

        for(let rat of this._otherRats){
            result += `\r\n##${rat.name}`;  
        }

        return result;
    }
}