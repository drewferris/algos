

function stringSplosion(str) {
    var result = '';

    for (var i = 0; i < str.length; i++) {
        var sub = str.substring(0, i + 1);
        result += sub;

    }

    return result;
}

stringSplosion('Code')
console.log(stringSplosion("Code") === "CCoCodCode");
console.log(stringSplosion("abc") === "aababc")
console.log(stringSplosion("ab") === "aab")

var test;