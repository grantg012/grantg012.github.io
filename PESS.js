function changeBox(boxID, amount) {
    var currentValue = Number(document.getElementById(boxID).value);
    var newValue = currentValue + Number(amount);
    var boxMin = Number(document.getElementById(boxID).min);
    var boxMax = Number(document.getElementById(boxID).max);
    if(boxMin <= newValue && newValue <= boxMax)
        document.getElementById(boxID).value = Math.round(newValue * 10) / 10;
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
    if(amount === 0) 
        document.getElementById("txtStudies").value = 0;
    else {
        var currentValue = Number(document.getElementById("txtStudies").value);
        document.getElementById("txtStudies").value = currentValue + amount;
    }
}

function infracChange(amount) {
    amount = Number(amount);
    if(amount === 0) 
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