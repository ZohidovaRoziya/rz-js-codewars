function isValidIP(str) {
  let arr = str.split(".");
  arr = arr.filter((val) => {
    return !!(+val >= 0 && +val <= 255 && val == String(+val));
  } );
    return arr.length == 4
}
console.log(isValidIP("12.255.56.01")); // -> true
