document.addEventListener('DOMContentLoaded', function () {

    console.log("it works");
    //===================| The calculator coming on|=======================|
    function calculatorOn() {
        var inputVal = document.getElementsByClassName("calculate-buttons");
        for (let i = 0; i < inputVal.length; i++) {
            //  console.log("the values in the array are", inputVal[i]);
            inputVal[i].addEventListener('click', function (event) {
                console.log("the value for this click is =" + inputVal[i].value);
                //inputCal(inputVal[i].value, inputVal[i].value, inputVal[i].value);
            })
        }
    }
    function inputCal(input1, operator, input2) {
        if (operator === "+") {
            return (input1 + input2);
            console.log(input1 + input2);
        }
        if (operator === "-") {
            return (input1 - input2);
        }
        if (operator === "*") {
            return (input1 * input2);
        }
        if (operator === "/") {
            return (input1 / input2);
        }
    }

    //==================|| Calculator on state ||==================================|
    calculatorOn();


});//End of JS Event Listener