function isIsogram(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (!newArr.includes(str[i].toLowerCase())) {
      newArr.push(str[i]);
    }
  }
  newArr.join("").includes(str) ? console.log(true) : console.log(false);
}
isIsogram(""); // => true
