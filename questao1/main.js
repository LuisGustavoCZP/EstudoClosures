function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

var multBy5 = multiplier(5);
const results = 
[
    multBy5(10), 
    multBy5(12),
    multBy5(7)
];

const resultsEl = document.querySelector("main > ul");
if(resultsEl != undefined)
{
    results.forEach(result => {resultsEl.innerHTML += "<li>"+ result +"</li>";});
}
else
{
    results.forEach(result => {console.log(result);});
}