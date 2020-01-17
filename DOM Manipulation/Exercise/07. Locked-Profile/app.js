function lockedProfile() {
    let hideShowInfo = function(hiddenFields, e) {
        if (e.target.innerHTML === "Show more") {                        
        hiddenFields.style.display = 'block';
        e.target.innerHTML = "Hide it";
        } else {
            hiddenFields.style.display = 'none';
            e.target.innerHTML = "Show more";
        }
    };
    
    let infoHandler = function (e) {
        let parent = e.target.parentElement;
        let lockRadio = parent.querySelector("input[value='lock']");

        if (lockRadio.checked === false) {
            let hiddenFields = parent.querySelector("input[type='email']").parentElement;
            hideShowInfo(hiddenFields, e);            
        }
    };

    let buttons = [...document.querySelectorAll("button")];
    buttons.map(x => x.addEventListener("click", infoHandler));
}