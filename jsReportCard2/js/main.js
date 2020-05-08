//TODO    1. flag  2.solve many documentbyID prob
//Globals ///////////////////////////////////////////////
let obj = {
    identity: {},
    marks: {}
};
//To validate user input (marks out of 100) ///////////////
function doCheck(id) {
    let marks = Number(document.getElementById(id).value);
    let spanReference = document.getElementById(id + "Span");
    let localFlag = true;  //local jasoos
    if (marks == "") {
        spanReference.innerHTML = `Pls fill ${id}`;
        localFlag = false;
    }
    if (marks > 100 || marks < 0) {
        spanReference.innerHTML = ` Check input.  0&lt;marks&lt;100`;
        localFlag = false;
    }
    if (isNaN(marks)) {
        spanReference.innerHTML = `NaN error. Pls fill valid number`;
        localFlag = false;
    }
    if (localFlag == true) {
        spanReference.innerHTML = "";
        obj.identity[`${id}`] = true;
        obj.marks[`${id}`] = marks;
    } else {
        obj.identity[`${id}`] = false;
    }
}
//Task Handler //////////////////////////////////////////////
function doCalc(task) {
    let localFlag;
    for (let key in obj.identity) {
        if (obj.identity[`${key}`] == false) {
            localFlag = false;
            break;
        }
        localFlag = true;
    }
    if (localFlag) {
        switch (task) {
            case "sum":
                document.getElementById("total").value = doSum();
                document.getElementById("perc").disabled = false;
                document.getElementById("perc").readOnly = true;

                break;
            case "perc":
                document.getElementById("perc").value = doPerc();
                document.getElementById("grade").disabled = false;
                document.getElementById("grade").readOnly=true;
                break;
            case "grade":
                document.getElementById("grade").value = doGrade();
                break;
            case "pass":
                doPass();
                break;
            default:
                alert("The given function isnt added to switch. Please add...")
        }
    }
}
//Calculation handlers ////////////////////////////////////////////
const doSum = function () {
    // document.getElementById()
    let total = 0;
    for (let key in obj.marks) {
        total += obj.marks[`${key}`];
    }
    return total;
}
const doPerc = () => {
    let total = doSum();
    let number = Object.keys(obj.marks).length;
    return total / number;
}
const doGrade = () => {
    let perc = doPerc();
    let grade;
    if (perc > 80)
        grade = "A";
    else if (perc > 60)
        grade = "B";
    else if (perc > 40)
        grade = "C";
    else
        grade = "X";
    return grade;
}
//Check Pass function////////////////////////////////////////
function doPass() {
    let localFlag;
    for (let key in obj.marks) {
        if (obj.marks[key] < 40) {
            localFlag = false;
            break;
        }
        localFlag = true;
    }
    if (localFlag)
        alert("You Passed");
    else
        alert("Better Luck Next Time");    
}
//Clear function//////////////////////////////////////////////////
function doClear() {
    document.getElementById("marksCpp").value = "";
    document.getElementById("marksJava").value = "";
    document.getElementById("marksWeb").value = "";

    document.getElementById("rollNo").value = "";
    document.getElementById("perc").value = "";
    document.getElementById("total").value = "";
    document.getElementById("grade").value = "";

    document.getElementById("grade").disabled = true;
    document.getElementById("perc").disabled = true;
    document.getElementById("total").disabled = true;
}
