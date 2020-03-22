module.exports = function reverse (n) {
    let str = n.toString();
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse().join("");
    let reverseStr = parseInt(reverseArr);
    return reverseStr;
}
