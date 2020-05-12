//Units
function doUnits(units) {
    obj.flagUnits = true;
    obj["units"] = units.value;
    document.getElementById("unitSpan").innerHTML = "";
}
//Checkboxes
function doCheck(ele, qty) {
    if (ele.checked == true) {
        qty.disabled = false;
        qty.value = 0;
        qty.addEventListener("change", qtyFunct);
    } else {
        qty.disabled = true;
        qty.value = 0;
        obj[qty.id] = 0;
    }
}

const obj = {};
function qtyFunct(e) {
    obj[e.target.id] = e.target.value;
}

//Radio buttons
function radDiscount() {
    obj.flagDiscount = true;
    let residential = document.getElementById("residential");
    let commercial = document.getElementById("commercial");
    if (residential.checked === true) {
        obj["discount"] = 20;
    } else {
        obj["discount"] = 10;
    }
    document.getElementById("radSpan").innerHTML = "";
}

//task handler
function doCalc(task) {
    if (obj.flagDiscount && obj.flagUnits) {
        switch (task) {
            case "bill":
                doBill();
                document.getElementById("btnDiscount").disabled = false;
                break;
            case "discount":
                doDiscount();
                document.getElementById("btnNet").disabled = false;
                break;
            case "net":
                doNet();
                break;
        }
    } else if (!obj.flagUnits)
        document.getElementById("unitSpan").innerHTML = "Pls fill units";
    else
        document.getElementById("radSpan").innerHTML = "Pls select one";
}

//Calculations handlers
let net = 0, discount;

function doBill() {
    let cost;
    document.getElementById("display").innerHTML="";
    cost = obj.units * 5;
    appendInator("Units bill :  Rs " + cost);
    net = cost;

    cost = obj.ACnum * 100;
    if (!isNaN(cost)) {
        appendInator("AC Bill :  Rs " + cost);
        net += cost;
    }
    cost = obj.CoolerNum * 80;
    if (!isNaN(cost)) {
        appendInator("Cooler Bill :  Rs " + cost)
        net += cost;
    }
    cost = obj.FanNum * 50;
    if (!isNaN(cost)) {
        appendInator("Fan Bill :  Rs " + cost);
        net += cost;
    }
    appendInator(" Bill :  Rs " + net);
}

function doDiscount() {
    discount = obj.discount / 100 * net;
    appendInator("Discount : Rs " + discount);
}

function doNet() {
    let total = net - discount;
    appendInator("Total Bill : Rs " + total);
}

//display appendinator
function appendInator(str) {
    let para = document.createElement("p");
    let text = document.createTextNode(str);
    para.appendChild(text);
    let element = document.getElementById("display");
    element.appendChild(para);
}
//to autofocus   reference.focus();