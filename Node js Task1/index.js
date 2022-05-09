function addition() {
    let sum = operands.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    console.log(sum);
}
function multiplication() {
    let mul = operands.reduce(function (previousValue, currentValue) {
        return previousValue * currentValue;
    });
    console.log(mul);
}
function subtraction() {
    let sub = operands[0] - operands[1];
    console.log(sub);
}
function division() {
    let div = operands[0] / operands[1];
    console.log(div);
}
let args = require('minimist')(process.argv.slice(2));
let operands = args['_'],operation = args['operation'];
validate();
function validate() {
    let access = 0;
    if (operands.length == 0 || operands.length == 0) {
        console.log("Invalid number of Arguments")
    }
    else {
        for (let num of operands) {
            if (typeof num != 'number') {
                console.log("Entered Arguments are Invalid..!");
                break;
            }
            else {
                access++;
            }
            if (access == operands.length) {
                Execute();
            }
        }
    }
}
function Execute() {
    switch (operation) {
        case "addition":
            addition();
            break;
        case "subtraction":
            if (operands.length != 2) {
                console.log("Invalid Number of Arguments..!");
                break;
            }
            else {
                subtraction();
                break;
            }
        case "multiply":
            multiplication();
            break;
        case "division":
            if (operands.length != 2) {
                console.log("Invalid Number of Arguments..!");
                break;
            }
            else {
                division();
                break;
            }
        default:
            console.log("Invalid Search");
    }
}
