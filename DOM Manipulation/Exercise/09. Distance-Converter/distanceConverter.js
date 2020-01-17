function attachEventsListeners() {
    let meterRatio = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    let getElement = function(element) {
        return document.querySelector(element);
    };

    let convertDistance = function () {
        let inputDistance = getElement("#inputDistance");
        let inputUnits =  getElement("#inputUnits");
        let selectedInputMetric = inputUnits.options[inputUnits.selectedIndex].value;
        let inputInMeters = inputDistance.value * meterRatio[selectedInputMetric];
                
        let outputUnits =  getElement("#outputUnits");
        let selectedOutputMetric = outputUnits.options[outputUnits.selectedIndex].value;
        let outputDistance = getElement("#outputDistance");
        return outputDistance.value = inputInMeters / meterRatio[selectedOutputMetric];
    };

    let convertHandler = function() {
        convertDistance();
    };

    let convertButton = getElement("#convert");
    convertButton.addEventListener("click", convertHandler);
}