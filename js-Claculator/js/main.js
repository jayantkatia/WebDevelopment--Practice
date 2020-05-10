//adding event listener to all buttons
let keys = document.getElementsByTagName("button");
for (let i = 0; i < keys.length; i++) {
    if (keys[i].id != "back" && keys[i].id != "CE" && keys[i].id != "equal") {
        keys[i].addEventListener("click", stringAdd);
    }
}
//globals
let back = document.getElementById("back");
let ce = document.getElementById("CE");
let screen = document.getElementById("screen");
let screenString = "";
const operators = ["+", "-", ".", "/", "*", "%"];
const operatorsRed = ["+", "-", "/", "*", "%"];
//check operator to automatically update screen and prevent double operators
function checkOperator(inp) {
    let charLast = screenString.charAt(screenString.length - 1);

    if (operators.some(x => x == charLast)) {
        if (operators.some(x => x == inp))
            return false;
    }
    else if (operatorsRed.some(x => x == inp))
        equalFunc();
    return true;
}
//string add functionality
function stringAdd(e) {
    if (checkOperator(e.target.innerHTML)) {
        screenString += e.target.innerHTML;
        updateScreen();
    }
}
//back functionality
back.onclick = function () {
    if(screenString=="Infinity"){
        screenString=" ";
    }
    screenString = screenString.substr(0, screenString.length - 1);
    updateScreen();
}
//CE functionality
ce.onclick = function () {
    screenString = "";
    updateScreen();
}
//Update Screen
function updateScreen() {
    if (screenString == "")
        screen.innerHTML = "0";
    else
        screen.innerHTML = screenString;
}
//Equal functionality
equal.onclick = equalFunc;
function equalFunc() {
    let oper1, oper2, oper, index, result;
    for (let i = 0; i < operatorsRed.length; i++) {
        let localIndex = screenString.lastIndexOf(operatorsRed[i]);
        if (localIndex != -1 && localIndex != 0) {
            index = localIndex;
            break;
        }
    }
    if (index != undefined) {
        oper1 = Number(screenString.substr(0, index));
        console.log(eval(screenString));

        oper2 = Number(screenString.substr(index + 1, screenString.length));
        oper = screenString.charAt(index);
        
        switch (oper) {
            case "+":
                result = oper1 + oper2;
                break;
            case "-":
                result = oper1 - oper2;
                break;
            case "*":
                result = oper1 * oper2;
                break;
            case "/":
                result = oper1 / oper2;
                break;
            default:
                alert("operator case");
        }
        screenString=Number(result).toString();
        updateScreen();
    }
}
//Javascript InBuilt Function
// function equalFunc() {
//     let result=eval(screenString);
//     screenString=Number(result).toString();
//     updateScreen();
// }
