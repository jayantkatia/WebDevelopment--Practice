let screenString = "";
let screen=document.getElementById("screen");
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
function stringAdd(ref){
    if(checkOperator(ref.innerHTML)){
        screenString+=ref.innerHTML;
        updateScreen();
    }
}
//back functionality
function doBack() {
    if(screenString=="Infinity"){
        screenString=" ";
    }
    screenString = screenString.substr(0, screenString.length - 1);
    updateScreen();
}
//CE functionality
function doCE() {
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
function equalFunc() {
    let result=eval(screenString);
    screenString=Number(result).toString();
    updateScreen();
}