function switchSlashes() {
    var inputString = document.getElementById("txtInput").value;
    document.getElementById("txtOutput").value = inputString.replace(/\\/g, "/");
    document.getElementById("txtOutput").select();
}