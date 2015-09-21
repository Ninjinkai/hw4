//Calculate compound interest and output result.
var result = function (principal, intRate, period) {
    'use strict';
    var i;
    for (i = 0; i < period; i = i + 1) {
//Typecast everything!
        principal = Number(principal) + (Number(principal) * (Number(intRate) * 0.01));
    }
//Dollar formatting from http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
    document.getElementById("result").innerHTML = "Total: $" + principal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

//Get values from fields and run calculate function when button is clicked.
document.getElementById("calculate").onclick = function () {
    'use strict';
    var principal = document.getElementById("principal").value, intRate = document.getElementById("intRate").value, period = document.getElementById("period").value;
    result(principal, intRate, period);
};
