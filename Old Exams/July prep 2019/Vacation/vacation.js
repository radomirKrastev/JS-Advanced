class Vacation {
  organizer;
  destination;
  budget;
  kids;

  constructor(organizer, destination, budget) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = budget;
    this.kids = {};
  }

  get numberOfChildren() {
    let count = 0;
    let keys = Object.keys(this.kids);
    keys.forEach((x) => (count += this.kids[x].length));
    return count;
  }

  registerChild(name, grade, budget) {
    if (budget < this.budget) {
      return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
    }

    if (!this.kids.hasOwnProperty(grade)) {
      this.kids[grade] = [];
    }

    if (this.kids[grade].includes(`${name}-${budget}`)) {
      return `${name} is already in the list for this ${this.destination} vacation.`;
    }

    this.kids[grade].push(`${name}-${budget}`);
    return this.kids[grade];
  }

  removeChild(name, grade) {
    if (
      this.kids.hasOwnProperty(grade) &&
      this.kids[grade].some((x) => x.includes(name))
    ) {
      this.kids[grade] = this.kids[grade].filter((x) => !x.includes(name));

      return this.kids[grade];
    }

    return `We couldn't find ${name} in ${grade} grade.`;
  }

  toString() {
    let keys = Object.keys(this.kids);

    if (this.numberOfChildren > 0) {
      let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`;
      keys.sort((a, b) => Number(a) - Number(b));

      for (let key of keys) {
        if (this.kids[key].length > 0) {
          let i = 1;
          result += `\nGrade: ${key}`;
          this.kids[key].forEach((x) => (result += `\n${i++}. ${x}`));
        }
      }

      return (result += "\n");
    }

    return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
  }
}

let vacation = new Vacation("Mr Pesho", "San diego", 2000);
console.log(vacation.registerChild("Gosho", 5, 2000));
console.log(vacation.registerChild("Lilly", 6, 2100));
console.log(vacation.registerChild("Pesho", 6, 2400));
console.log(vacation.registerChild("Gosho", 5, 2000));
console.log(vacation.registerChild("Tanya", 5, 6000));
console.log(vacation.registerChild("Mitko", 10, 1590));

console.log(vacation.removeChild("Tanya", 5));
console.log(vacation.removeChild("Tanya", 5));
console.log(vacation.removeChild("Gosho", 5));
console.log(vacation.removeChild("Gosho", 5));
console.log(vacation.removeChild("Mitko", 10));

console.log(vacation.registerChild("Mitko", 1, 5000));
console.log(vacation.toString());
