function Converter2(param, inputBase, outputBase) {
    var ParamValue = 0;
    var total = 0;
    var i;
    if (inputBase >= 2 && inputBase <= 9) { //binary to base 9
        for (i = param.length - 1; i >= 0; i--) {
            total += param.charAt(i) * Math.pow(inputBase,(param.length - 1 - i));
        }
        ParamValue = total;
    } else if (inputBase == 10) { //base 10
        ParamValue = param;
    } else if (inputBase == 16) { //hexadecimal
        for (i = param.length - 1; i >= 0; i--) {
            total += HexaLetters(param.charAt(i))*Math.pow(16,(param.length - 1 - i));
        }
        ParamValue = total;
    }
    
    var rString = ""; 
    var LoopItVal = 0;
    if (outputBase >= 2 && outputBase <= 9) { //binary to base 9
        var PlaceValue = 0;
        for (i = Math.floor(Math.log(ParamValue)/Math.log(outputBase)); i >= 0; i--) {
            LoopItVal = Math.pow(outputBase,i);
            PlaceValue = IntDiv(ParamValue, LoopItVal);
            rString += String(PlaceValue);
            ParamValue -= PlaceValue * LoopItVal;
        }
        return rString;
    } else if (outputBase == 10) { //base 10
        return ParamValue;
    } else if (outputBase == 16) { //hexadecimal
        LoopItVal = 0;
        var HexCharVal = 0;
        for (i = Math.floor(Math.log(ParamValue)/Math.log(16)); i >= 0; i--) {
            LoopItVal = Math.pow(16, i);
            HexCharVal = IntDiv(ParamValue, LoopItVal);
            rString += HexaLetters(HexCharVal);
            ParamValue -= HexCharVal * LoopItVal;
        }
        return rString;
    }
}


function HexaLetters(Input) {
    if (typeof Input == "string") {
        var CharCode = Input.toLowerCase().charCodeAt(0);
        if (CharCode >= 97) {
            return CharCode - 87;
        } else {
        return Number(Input);
        }
    } else if (typeof Input == "number") {
        if (Input <= 9) {
            return Input;
        } else {
            return String.fromCharCode(87 + Input);
        }
    }
}

function IntDiv(Dividend, Divisor) {
    return Math.floor(Dividend/Divisor);
}
