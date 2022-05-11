function solve(arr) {
  let res = [];
  let test = 0;
  arr.forEach((el) => {
    for (let i = 1; i <= el.length; i++) {
      if (el[i - 1].toLowerCase().charCodeAt() - 96 == i) {
        test++;
      }

      if (el.length == i) {
        res.push(test);
        test = 0;
      }
    }
  });
  console.log(res);
}
solve(["abode", "ABc", "xyzD"]); // => [4, 3, 1]
