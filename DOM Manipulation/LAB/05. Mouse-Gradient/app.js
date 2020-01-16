function attachGradientEvents() {
    const getElement = function (element) {
        return document.querySelector(element);
    };

    const showPosition = function(e) {
        let result = getElement("#result");
        result.innerHTML = Math.floor((e.offsetX / gradient.clientWidth) * 100) + "%";
        console.log(result.innerHTML);
    };

    let gradient = getElement("#gradient");
    gradient.addEventListener("mousemove", showPosition);
}