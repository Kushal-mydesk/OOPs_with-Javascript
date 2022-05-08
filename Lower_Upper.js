function toggleCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // if upper case
        if (charCode >= 65 && charCode <= 90) {
            result += str.charAt(i).toLowerCase();
        } else {
            result += str.charAt(i).toUpperCase();
        }
    }
    
    return result;
}
let str = "aBcD";
let result = toggleCase(str);
console.log(result);