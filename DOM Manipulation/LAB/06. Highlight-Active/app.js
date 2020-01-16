function focus() {
    const getElementsAsList = function(elements) {
        return [...document.querySelectorAll(elements)];
    };

    let focusHandler = function(e) {
        getElementsAsList("input[type='text']")
        .map(x => x.parentElement.className='blurred');

        e.target.parentElement.className = 'focused';
    };

    getElementsAsList("input[type='text']")
    .forEach(x => x.addEventListener("focus", focusHandler));
}