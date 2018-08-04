function FieldThree() {
    var convertedValue = Converter2($("#NumThree").val(),$("#InpType").val(),$("#OutType").val())
    var minWidth = document.getElementById("nudOutWidth").value;
    if(minWidth !== '') {
        minWidth = parseInt(minWidth, 10);
        if(convertedValue.length < minWidth) {
            convertedValue = "0".repeat(minWidth - convertedValue.length) + convertedValue;
        }
    } 
    var breaksEvery = document.getElementById("nudBreaks").value;
    if(breaksEvery !== '') {
        breaksEvery = parseInt(breaksEvery, 10);
        if(breaksEvery < convertedValue.length) {
            originalConverted = convertedValue;
            convertedValue = '';
            /*
            for(var i = 0; i < originalConverted.length; i += breaksEvery) {
                convertedValue += originalConverted.substring(i, i + breaksEvery) + ' ';
            }
            */
            for(var i = originalConverted.length - breaksEvery; i >= 0 ; i -= breaksEvery) {
                convertedValue = originalConverted.substring(i, i + breaksEvery) + ' ' + convertedValue;
            }
            if(i != -breaksEvery) {
                convertedValue = originalConverted.substring(0, i + breaksEvery) + ' ' + convertedValue;
            }
        }
    }
    $("#ResultThree").text(convertedValue);
}

function FieldThreeText(e) {
    if(e.keyCode == 13){
        FieldThree()
    }
}