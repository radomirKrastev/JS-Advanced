class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.subscribers = [];
    this.subscriptionTypes = {
      normal: this.libraryName.length,
      special: this.libraryName.length * 2,
      vip: Number.MAX_SAFE_INTEGER
    };
  }

  subscribe(name, type) {
    if (!Object.keys(this.subscriptionTypes).includes(type)) {
      throw new Error(`The type ${type} is invalid`);
    }

    let subscriber = this.subscribers.find((x) => x.name === name);

    if (!subscriber) {
      subscriber = { name, type, books: [] };
      this.subscribers.push(subscriber);
    }

    subscriber.type = type;
    return subscriber;
  }

  unsubscribe(name) {
    let subscriber = this.subscribers.find((x) => x.name === name);

    if (!subscriber) {
      throw new Error(`There is no such subscriber as ${name}`);
    }

    this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    return this.subscribers;
  }

  receiveBook(name, title, author) {
    let subscriber = this.subscribers.find((x) => x.name === name);

    if (!subscriber) {
      throw new Error(`There is no such subscriber as ${name}`);
    }

    let capacity = this.subscriptionTypes[subscriber.type];

    if (subscriber.books.length >= capacity) {
      throw new Error(`You have reached your subscription limit ${capacity}!`);
    }

    let book = { title, author };
    subscriber.books.push(book);
    return subscriber;
  }

  showInfo() {
    if (this.subscribers.length === 0) {
      return `${this.libraryName} has no information about any subscribers`;
    }

    console.log(this.subscribers);
    return (
      this.subscribers
        .map((x) => {
          return `Subscriber: ${x.name}, Type: ${
            x.type
          }\nReceived books: ${x.books
            .map((x) => {
              return `${x.title} by ${x.author}`;
            })
            .join(", ")}`;
        })
        .join("\n") + "\n"
    );
  }
}

let lib = new Library("Lib");

lib.subscribe("Peter", "normal");
lib.subscribe("John", "special");

lib.receiveBook("John", "A Song of Ice and Fire", "George R. R. Martin");
lib.receiveBook("Peter", "Lord of the rings", "J. R. R. Tolkien");
lib.receiveBook("John", "Harry Potter", "J. K. Rowling");

console.log(lib.showInfo());
