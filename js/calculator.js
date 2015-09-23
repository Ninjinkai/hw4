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

//Inform users that their inputs are not acceptable.
var invalid = function () {
    'use strict';
    document.getElementById("result").innerHTML = "All inputs must be numbers.";
};

//Get values from fields and run calculate function when button is clicked.
document.getElementById("calculate").onclick = function () {
    'use strict';
    var principal = document.getElementById("principal").value, intRate = document.getElementById("intRate").value, period = document.getElementById("period").value;
//Check if inputs can be used for calculation.
    if (isNaN(principal) || isNaN(intRate) || isNaN(period)) {
        invalid();
    } else {
        result(principal, intRate, period);
    }
};
