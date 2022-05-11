function filter_list(l) {
  let arr = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] === 0) {
      arr.push(l[i]);
    } else if (+l[i] && typeof l[i] === "number") {
      arr.push(l[i]);
    }
    }
   
  return arr;
}
console.log( filter_list( [ 1, 2, "aasf", "1", "123", 123 ] ) ); //->,[1,2]
