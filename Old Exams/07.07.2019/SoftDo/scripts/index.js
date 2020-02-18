function mySolution() {
  const question = getElement("#inputSection textarea");
  const user = getElement("#inputSection input[type='username']");
  const pendingSection = getElement("#pendingQuestions");
  const openSection = getElement("#openQuestions");
  const questInfo = {};

  function getElement(elem) {
    return document.querySelector(elem);
  }

  function createElement(tag, className, type, text) {
    let element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    if (type) {
      element.type = type;
    }
    if (text) {
      element.innerHTML = text;
    }

    return element;
  }

  function createImg() {
    let avatar = createElement("img");
    avatar.src = "./images/user.png";
    avatar.width = "32";
    avatar.height = "32";
    return avatar;
  }

  function removeQuestion(e) {
    let question = e.target.parentElement.parentElement;
    question.parentElement.removeChild(question);
  }

  function createQuestionElement(className) {
    let username =
      questInfo.username.length > 0 ? questInfo.username : "Anonymous";
    let span = createElement("span", undefined, undefined, username);
    let p = createElement("p", undefined, undefined, questInfo.question);

    let questionElement = createElement("div", className);
    questionElement.appendChild(createImg());
    questionElement.appendChild(span);
    questionElement.appendChild(p);
    return questionElement;
  }

  function answer(e) {
    let replySection = e.target.parentElement;
    let replyText = replySection.querySelector(".replyInput");
    let ol = replySection.querySelector(".reply");

    if (replyText.value.length > 0) {
      let reply = createElement("li", undefined, undefined, replyText.value);
      ol.appendChild(reply);
      replyText.value = "";
    }
  }

  function expandContract(e) {
    let question = e.target.parentElement.parentElement;
    let replySection = question.querySelector(".replySection");
    let replyButton = question.querySelector(".reply");

    if (replyButton.innerHTML === "Back") {
      replyButton.innerHTML = "Reply";
      replySection.style.display = "none";
      return;
    }

    replyButton.innerHTML = "Back";
    replySection.style.display = "block";
  }

  function openQuestion(e) {
    removeQuestion(e);
    let questionElement = createQuestionElement("openQuestion");
    let actions = createElement("div", "actions");
    let reply = createElement("button", "reply", undefined, "Reply");
    reply.addEventListener("click", expandContract);
    actions.appendChild(reply);
    questionElement.appendChild(actions);

    let input = createElement("input", "replyInput", "text");
    input.placeholder = "Reply to this question here...";
    let button = createElement("button", "replyButton", undefined, "Send");
    button.addEventListener("click", answer);
    let ol = createElement("ol", "reply", "1");

    let replySection = createElement("div", "replySection");
    replySection.appendChild(input);
    replySection.appendChild(button);
    replySection.appendChild(ol);
    replySection.style.display = "none";

    questionElement.appendChild(replySection);
    openSection.appendChild(questionElement);
  }

  function sendQuestion() {
    if (question.value.length > 0) {
      questInfo.question = question.value;
      questInfo.username = user.value;
      let questionElement = createQuestionElement("pendingQuestion");

      let actions = createElement("div", "actions");
      let archive = createElement("button", "archive", undefined, "Archive");
      let open = createElement("button", "open", undefined, "Open");
      archive.addEventListener("click", removeQuestion);
      open.addEventListener("click", openQuestion);
      actions.appendChild(archive);
      actions.appendChild(open);

      questionElement.appendChild(actions);
      pendingSection.appendChild(questionElement);
    }

    question.value = "";
    user.value = "";
  }

  let sendbutton = document.querySelector("#inputSection div button");
  sendbutton.addEventListener("click", sendQuestion);
}
