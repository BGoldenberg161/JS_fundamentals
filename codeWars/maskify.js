//write a function maskify, which changes all but the last four characters into '#'.
const maskify = (cc) => {

    if(cc.length < 5) return cc;
    let masked = new Array(cc.length - 3).join("#");
    const lastFour = cc.substring(cc.length - 4);
    masked = masked + lastFour;

    return masked;
}

console.log(maskify("0987654321"));
console.log(maskify("1"));
console.log(maskify("11111"));

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""