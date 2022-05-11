function isOddHeavy(n) {
  let odd = [];
  let even = [];
  n.forEach((el) => {
    el % 2 != 0 ? odd.push(el) : even.push(el);
  });
    if ( odd.length == 0 ) return false;
    let min = odd.sort( ( a, b ) => a - b )
    return even.some((i) => i > min[0])
}
isOddHeavy([11, 4, 9, 2, 8]);
