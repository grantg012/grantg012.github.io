function FieldThree() {
    $("#ResultThree").text(Converter2($("#NumThree").val(),$("#InpType").val(),$("#OutType").val()));
}

function FieldThreeText(e) {
    if(e.keyCode == 13){
        FieldThree()
    }
}