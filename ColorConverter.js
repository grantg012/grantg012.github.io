var divArray=["divColor","divPrev1","divPrev2", "divPrev3"];
var spnArray=["spnCur", "spnPrev1", "spnPrev2", "spnPrev3"]; 



function toHex() {
    var red = Number(document.getElementById("txtRed").value);
    var grn = Number(document.getElementById("txtGrn").value);
    var blu = Number(document.getElementById("txtBlu").value);
    var hex = base10to16(red) + base10to16(grn) + base10to16(blu);
    hex = caseChange(hex);
    moveDivsDown();
    document.getElementById("txtHex").value = hex;
    document.getElementById("colorPicker").value ="#" + hex;
    //document.getElementById("txtHex2").value = "#" + hex;
    document.getElementById("divColor").style.backgroundColor = "#" + hex;
    document.getElementById("spnCur").innerHTML = "#"+ hex;
    document.getElementById("txtHex").focus();
    document.getElementById("txtHex").select();
}

function toHexText(e) {
    if(e.keyCode == 13) {
        toHex();
    }
}

function toRGB() {
    var hexString = document.getElementById("txtHex").value;
    hexString = caseChange(hexString);
    document.getElementById("txtRed").value = base16to10(hexString.substring(0, 2));
    document.getElementById("txtGrn").value = base16to10(hexString.substring(2, 4));
    document.getElementById("txtBlu").value = base16to10(hexString.substring(4, 6));
    document.getElementById("colorPicker").value ="#" + hexString;
    moveDivsDown();
    document.getElementById("spnCur").innerHTML = "#" + hexString;
    document.getElementById("divColor").style.backgroundColor = "#" + hexString;
    document.getElementById("txtRed").focus();
    document.getElementById("txtRed").select();
}

function toRGBText(e) {
    if(e.keyCode == 13) {
        toRGB();
    }
}

function fromPick() {
    var hexString = document.getElementById("colorPicker").value;
    hexString = caseChange(hexString.substring(1,7));
    document.getElementById("txtRed").value = base16to10(hexString.substring(0, 2));
    document.getElementById("txtGrn").value = base16to10(hexString.substring(2, 4));
    document.getElementById("txtBlu").value = base16to10(hexString.substring(4, 6));
    document.getElementById("txtHex").value = hexString;
    moveDivsDown();
    document.getElementById("spnCur").innerHTML = "#"+ hexString;
    document.getElementById("divColor").style.backgroundColor = "#" + hexString;
    document.getElementById("txtRed").focus();
    document.getElementById("txtRed").select();
    
}

function base10to16(paramValue) {
    var rtrnValue = Converter2(paramValue, 10, 16);
    
    // Zero pad if needed. 
    while(rtrnValue.length < 2)
        rtrnValue = "0" + rtrnValue;
    // if(rtrnValue.length == 1)
    
    return rtrnValue;
}

function base16to10(param) {
    return Converter2(param, 16, 10);
}

function moveDivsDown() {
    for(var i = 3; i > 0; i--) {
        document.getElementById(divArray[i]).style.backgroundColor = document.getElementById(divArray[i-1]).style.backgroundColor;
        document.getElementById(spnArray[i]).innerHTML = document.getElementById(spnArray[i-1]).innerHTML;
    }
}

function previewClicked(div) {
    var color = div.style.backgroundColor;
    var hexString = document.getElementById(spnArray[divArray.indexOf(div.id)]).innerHTML;
    addToTop(color, hexString);
}

function chkCapsChange() {
    document.getElementById("txtHex").value = caseChange(document.getElementById("txtHex").value);
    for(var i = 0; i < spnArray.length; i++)
        document.getElementById(spnArray[i]).innerHTML = caseChange(document.getElementById(spnArray[i]).innerHTML);
}

function useCaps() {
    return document.getElementById("chkCaps").checked;
}

function addToTop(color, hexString) {
    // This function is used by previewClicked() to push the colors down and set the top div and inputs to the specified color. 
    moveDivsDown();
    document.getElementById("txtHex").value = caseChange(hexString.substring(1,7));
    document.getElementById("txtRed").value = base16to10(hexString.substring(1, 3));
    document.getElementById("txtGrn").value = base16to10(hexString.substring(3, 5));
    document.getElementById("txtBlu").value = base16to10(hexString.substring(5, 7));
    document.getElementById("colorPicker").value = caseChange(hexString);
    document.getElementById("divColor").style.backgroundColor = color;
    document.getElementById("spnCur").innerHTML = hexString;
    document.getElementById("txtHex").focus();
    document.getElementById("txtHex").select();
}

function caseChange(text, caps) {
    if(caps === undefined) caps = useCaps();
    if(caps) 
        return text.toUpperCase();
    else 
        return text.toLowerCase();
}

function cancelChildClick(e) {
    e.stopPropagation();
}
