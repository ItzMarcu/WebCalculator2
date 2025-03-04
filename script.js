
let error = false;
let equation = "";
let display = document.getElementById("display");
function clear() {
    display.innerText = "";
    equation = "";
}

let ACbtn = document.getElementById("AC")
ACbtn.addEventListener("click", function () {
    clear();
});

function appendValue(value) {
    equation += value;
    if (error) {
        display.innerText = "";
        display.innerText = equation;
        error = false;
    } else {
        display.innerText = equation;
    }
}

function calculate() {
    try {
        let result = eval(equation);
        if (isNaN(result)) {
            display.innerText = "Errore Matematico";
        } else {
            display.innerText = result;
            equation = "";
        }
    } catch (error) {
        display.innerText = "Errore";
        equation = "";
        error = true;
    }
}