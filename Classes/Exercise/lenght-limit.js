class Stringer{
    innerString;
    innerLength;
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + "...";
        }

        return this.innerString;
    }
}