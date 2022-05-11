////!N_1 - usul
// function digPow(n, p) {
//     strN = String( n );
//     res = 0;
//   for (let i = 0; i < strN.length; i++) {
//       res += ( +strN[ i ] ) ** p;
//       p++
//     }
//     if ( res < n || !Number.isInteger(res / n))
//     {
//         return -1
//     } else return res / n
// }
// digPow(46288, 3); //=> 51

////!N_2 - usul
function digPow(n, p) {
    var res = String(n).split("").reduce((prev, curr, index) => prev + Math.pow(curr, p + index), 0)
    return res % n ? -1 : res / n
}
console.log(digPow(46288, 3)); //=> 51
  