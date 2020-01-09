function solve() {
   const sendMessage = () => {
      let chatInput = document.getElementById("chat_input");
      let myMessage = document.querySelector(".message.my-message");
      let newMessage = myMessage.cloneNode(true);
      newMessage.innerHTML = chatInput.value;
      let chat = document.querySelector("#chat_messages");
      chat.appendChild(newMessage);
      chatInput.value = "";
   };

   document.getElementById("send").addEventListener("click", sendMessage);
}