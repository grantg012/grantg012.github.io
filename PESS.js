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

function turnChange(amount) {
    changeBox("txtTurns", amount);
}

function resetStats() {
    if(isFullMode()) {
        document.getElementById("txtGPA").value = 3.5;
        document.getElementById("txtHealth").value = 115;
        document.getElementById("txtHappy").value = 115;
        document.getElementById("txtMoney").value = 3500;
        document.getElementById("txtInfrac").value = 0;
    } else {
        document.getElementById("txtGPA").value = 3.2;
        document.getElementById("txtHealth").value = 130;
        document.getElementById("txtHappy").value = 130;
        document.getElementById("txtMoney").value = 2000;
    }
    document.getElementById("txtStudies").value = 0;
    document.getElementById("txtNotes").value = "";
    document.getElementById("txtTurns").value = 0;
}

function isFullMode() {
    return document.getElementById("btnSwitch").innerHTML == "Switch to Tech";
}

function switchModes() {
    var expanded = document.getElementsByClassName("PESS_Full");
    var simplified = document.getElementsByClassName("PESS_Tech");
    var i;
    if(isFullMode()) { // Changing to Tech
        for(i = 0; i < expanded.length; ++i) {
            expanded[i].style.display = "none";
        }
        for(i = 0; i < simplified.length; ++i) {
            simplified[i].style.display = "block";
        }
        document.getElementById("btnSwitch").innerHTML = "Switch to Full";
    } else { // Changing to full 
        for(i = 0; i < expanded.length; ++i) {
            expanded[i].style.display = "block";
        }
        for(i = 0; i < simplified.length; ++i) {
            simplified[i].style.display = "none";
        }
        document.getElementById("btnSwitch").innerHTML = "Switch to Tech";
    }
    resetStats();
}