class Article {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length === 1) {
      return `${this._likes[0]} likes this article!`;
    }

    return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same article twice!");
    }

    if (this.creator === username) {
      throw new Error("You can't like your own articles!");
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this article!");
    }

    this._likes.splice(this._likes.indexOf(username), 1);
    return `${username} disliked ${this.title}`;
  }

  comment(Username, Content, Id) {
    let currentComment = this._comments.find((x) => x.Id === Id);
    if (Id === undefined || !currentComment) {
      currentComment = { Id: this._comments.length + 1, Username, Content, Replies: [] };
      this._comments.push(currentComment);
      return `${Username} commented on ${this.title}`;
    }

    let reply = {
      Id: `${currentComment.Id}.${currentComment.Replies.length + 1}`,
      Username,
      Content
    };

    currentComment.Replies.push(reply);
    return "You replied successfully";
  }

  toString(sortingType) {
    let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;
    result += this._comments.length > 0 ? "\n" : "";
    if (sortingType === "asc") {
      result += this._comments
        .sort((a, b) => a.Id - b.Id)
        .map((x) => {
          let comments = `-- ${x.Id}. ${x.Username}: ${x.Content}`;
          let replies = "";
          replies += x.Replies.sort((a, b) => a.Id - b.Id)
            .map((r) => {
              return `--- ${r.Id}. ${r.Username}: ${r.Content}`;
            })
            .join("\n");

          comments += replies === "" ? "" : "\n";
          return (comments += replies);
        })
        .join("\n");
    } else if (sortingType === "desc") {
      result += this._comments
        .sort((a, b) => b.Id - a.Id)
        .map((x) => {
          let comments = `-- ${x.Id}. ${x.Username}: ${x.Content}`;
          let replies = "";
          replies += x.Replies.sort((a, b) => b.Id - a.Id)
            .map((r) => {
              return `--- ${r.Id}. ${r.Username}: ${r.Content}`;
            })
            .join("\n");

          comments += replies === "" ? "" : "\n";
          return (comments += replies);
        })
        .join("\n");
    } else {
      result += this._comments
        .sort((a, b) => a.Username.localeCompare(b.Username))
        .map((x) => {
          let comments = `-- ${x.Id}. ${x.Username}: ${x.Content}`;
          let replies = "";
          replies += x.Replies.sort((a, b) => a.Username.localeCompare(b.Username))
            .map((r) => {
              return `--- ${r.Id}. ${r.Username}: ${r.Content}`;
            })
            .join("\n");

          comments += replies === "" ? "" : "\n";
          return (comments += replies);
        })
        .join("\n");
    }

    return result;
  }
}

// let article = new Article("TestArt", "Testovich");
// console.log(article.likes);
// article.like("Anton");
// console.log(article.likes);
// console.log(article.like("Petrov"));
// console.log(article.likes);
// console.log(article.dislike("Anton"));
// console.log(article.dislike("Petrov"));

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));


'John disliked My Article!''John disliked My Article'