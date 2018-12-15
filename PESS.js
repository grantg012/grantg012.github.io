function changeBox(boxID, amount) {
    var currentValue = Number(document.getElementById(boxID).value);
    document.getElementById(boxID).value = currentValue + Number(amount);
}

function GPAchange(amount) {
    changeBox("txtGPA", amount);
}

function healthChange(amount) {
    changeBox("txtHealth", amount);
}

function happyChange(amount) {
    changeBox("txtHappy", amount);
}

function moneyChange(amount) {
    changeBox("txtMoney", amount);
}

function studiesChange(amount) {
    amount = Number(amount);
    if(amount == 0) 
        document.getElementById("txtStudies").value = 0;
    else {
        var currentValue = Number(document.getElementById("txtStudies").value);
        document.getElementById("txtStudies").value = currentValue + amount;
    }
}

function infracChange(amount) {
    amount = Number(amount);
    if(amount == 0) 
        document.getElementById("txtInfrac").value = 0;
    else {
        var currentValue = Number(document.getElementById("txtInfrac").value);
        document.getElementById("txtInfrac").value = currentValue + amount;
    }
}

function resetStats() {
    document.getElementById("txtGPA").value = 3.5;
    document.getElementById("txtHealth").value = 115;
    document.getElementById("txtHappy").value = 115;
    document.getElementById("txtMoney").value = 3500;
    document.getElementById("txtStudies").value = 0;
    document.getElementById("txtInfrac").value = 0;
    document.getElementById("txtNotes").value = "";
}
