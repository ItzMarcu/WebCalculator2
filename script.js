
let equation = "";
let display = document.getElementById("display");
function clear() {
    display.innerText = "";
}

let ACbtn = document.getElementById("AC")
ACbtn.addEventListener("click", function () {
    clear();
});

function appendValue(value) {
    equation += value;
    display.innerText = equation;
}

function calculate() {
    try {
        let result = eval(equation);
        display.innerText = result;
        equation = "";
    } catch (error) {
        display.innerText = "Errore";
    }
}