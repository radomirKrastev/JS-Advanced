function encodeAndDecodeMessages() {
    let buttons = [...document.querySelectorAll("button")];
    let receiverText = document.querySelector("textarea[placeholder='No messages...']");

    let encodeText = function(e) {
        let parent = e.target.parentElement;
        let text = parent.querySelector("textarea");

        if (text.value && text.value !== "") {
            let encodedText = "";

            for (let i = 0; i < text.value.length; i++){
                let asciiEncoded = text.value.charCodeAt(i) + 1;
                let enCodedLetter = String.fromCharCode(asciiEncoded);
                encodedText += enCodedLetter;
            }

            receiverText.value = encodedText;
            text.value = "";
        }
    };

    let decodeText = function() {
        if(receiverText.value && receiverText.value !== "") {
            let decodedText = "";

            for (let i = 0; i < receiverText.value.length; i++){
                let asciiDecoded = receiverText.value.charCodeAt(i) - 1;
                let deCodedLetter = String.fromCharCode(asciiDecoded);
                decodedText += deCodedLetter;
            }

            receiverText.value = decodedText;
        }
    };

    let encodeHandler = function(e) {
      encodeText(e);  
    };
    
    let decodeHandler = function() {
        decodeText();
    };

    let encodeButton = buttons[0].addEventListener("click", encodeHandler);
    let decodeButton = buttons[1].addEventListener("click", decodeHandler);
}