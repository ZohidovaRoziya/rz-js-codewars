function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      vowelsCount = vowelsCount + 1;
    } else if (str[i] == "e") {
      vowelsCount = vowelsCount + 1;
    } else if (str[i] == "i") {
      vowelsCount = vowelsCount + 1;
    } else if (str[i] == "u") {
      vowelsCount = vowelsCount + 1;
    } else if (str[i] == "o") {
      vowelsCount = vowelsCount + 1;
    } else {
      continue;
    }
  }
  console.log(vowelsCount);
  return vowelsCount;
}
getCount("abrecoduabri"); //=> 5
