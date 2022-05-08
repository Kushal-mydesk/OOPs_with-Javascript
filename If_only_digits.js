function onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
        if (d < 48 || d > 57) {
          return false
        }
    }
    return true
  }

let str = "s123";
let result = onlyDigits(str);
console.log(result);