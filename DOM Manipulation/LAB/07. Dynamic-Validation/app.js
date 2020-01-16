function validate() {
    let validateEmail = function (e) {
        let input = e.target;
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!pattern.test(input.value)){
            input.className = 'error';
        } else {
            input.className = '';
        }
    };

    let validationHandler = function(e) {
        validateEmail(e);
    };

    document.querySelector("input[type='text']").addEventListener("change", validationHandler);
}