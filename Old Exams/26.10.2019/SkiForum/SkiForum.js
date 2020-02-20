class Forum {
  constructor() {
    this._users = [];
    this._questions = [];
    this._id = 1;
  }

  _validateArgs() {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length === 0 || typeof arguments[i] === "undefined") {
        return false;
      }
    }

    return true;
  }

  register(username, password, repeatPassword, email) {
    if (!this._validateArgs(username, password, repeatPassword, email)) {
      throw new Error("Input can not be empty");
    }

    if (password !== repeatPassword) {
      throw new Error("Passwords do not match");
    }

    if (
      this._users.some((x) => x.username === username) ||
      this._users.some((x) => x.email === email)
    ) {
      throw new Error("This user already exists!");
    }

    let user = { username, email, password, logged: false };
    this._users.push(user);
    return `${username} with ${email} was registered successfully!`;
  }

  login(username, password) {
    return this._log(username, password, "in");
  }

  logout(username, password) {
    return this._log(username, password, "out");
  }

  postQuestion(username, question) {
    let user = this._users.find((x) => x.username === username);

    this._validateUserAndText(user, question, "question");

    let quest = { id: this._id++, username, text: question, answers: [] };
    this._questions.push(quest);
    return "Your question has been posted successfully";
  }

  postAnswer(username, id, answer) {
    let user = this._users.find((x) => x.username === username);

    this._validateUserAndText(user, answer, "answer");

    let question = this._questions.find((x) => x.id === id);
    if (!question) {
      throw new Error("There is no such question");
    }

    let answerObj = { username, answer };
    question.answers.push(answerObj);
    return "Your answer has been posted successfully";
  }

  showQuestions() {
    return this._questions
      .map((x) => {
        let answers = x.answers
          .map((y) => `---${y.username}: ${y.answer}`)
          .join("\n");
        let result = `Question ${x.id} by ${x.username}: ${x.text}`;
        return answers.length > 0 ? (result += `\n${answers}`) : result;
      })
      .join("\n");
  }

  _log(username, password, act) {
    let user = this._users.find((x) => x.username === username);
    if (!user) {
      throw new Error("There is no such user");
    }

    if (user.password === password) {
      if (act === "out") {
        user.logged = false;
      } else {
        user.logged = true;
      }
      return `Hello! You have logged ${act} successfully`;
    }
  }

  _validateUserAndText(user, text, act) {
    if (!user || !user.logged) {
      throw new Error(`You should be logged in to post ${act}s`);
    }

    if (text.length === 0) {
      throw new Error(`Invalid ${act}`);
    }
  }
}

let forum = new Forum();

forum.register("Michael", "123", "123", "michael@abv.bg");
forum.register("Stoyan", "123ab7", "123ab7", "some@gmail@.com");
forum.login("Michael", "123");
forum.login("Stoyan", "123ab7");

forum.postQuestion("Michael", "Can I rent a snowboard from your shop?");
forum.postAnswer("Stoyan", 1, "Yes, I have rented one last year.");
forum.postQuestion(
  "Stoyan",
  "How long are supposed to be the ski for my daughter?"
);
forum.postAnswer("Michael", 2, "How old is she?");
forum.postAnswer("Michael", 2, "Tell us how tall she is.");

console.log(forum.showQuestions());

// let forum = new Forum();

// forum.register("Jonny", "12345", "12345", "jonny@abv.bg");
// forum.register("Peter", "123ab7", "123ab7", "peter@gmail@.com");
// forum.login("Jonny", "12345");
// forum.login("Peter", "123ab7");

// forum.postQuestion("Jonny", "Do I need glasses for skiing?");
// forum.postAnswer("Peter", 1, "Yes, I have rented one last year.");
// forum.postAnswer("Jonny", 1, "What was your budget");
// forum.postAnswer("Peter", 1, "$50");
// forum.postAnswer("Jonny", 1, "Thank you :)");

// console.log(forum.showQuestions());
