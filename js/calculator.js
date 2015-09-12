//Calculate compound interest and output result.
var result = function (principle, intRate, period) {
    for (var i = 0; i < period; i++) {
        principle += (principle * (intRate * 0.01));
    }
    document.getElementById("result").innerHTML = "Total: $" + principle;
};

//Get values from fields and run calculate function when button is clicked.
document.getElementById("calculate").onclick = function () {
    var principle = document.getElementById("principle").value;
    var intRate = document.getElementById("intRate").value;
    var period = document.getElementById("period").value;
    result(principle, intRate, period);
};