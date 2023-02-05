let prev = document.getElementById("last_operation_history");
let inputBox = document.getElementById("box");
let operator = document.getElementsByClassName("operator");

let CE_delete = document.getElementById("delete");
let C_deleteAll = document.getElementById("deleteAll");
let percent = document.getElementById("percent");
let divide = document.getElementById("divide");
let multi = document.getElementById("multi");
let sub = document.getElementById("sub");
let sum = document.getElementById("sum");
let plusMinus = document.getElementById("plusMinus");
let dot = document.getElementById("dot").value;
let equal = document.getElementById("equal").value;

let operator_value;
let last_button;
let calc_operator;
var firstNum = true;
let numbers = [];
let operators = ["+", "-", "/", "*"];


document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.innerText);
    });
});

document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.id);
    });
});

