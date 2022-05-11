////!N_1 usul
// function squareOrSquareRoot( array ) {
//     let res = [];
//     array.map( ( i ) => {
//         if ( Math.sqrt( i ) === Math.floor( Math.sqrt( i ) ) ) {
//             res.push( Math.sqrt( i ) );
//         } else {
//             res.push( Math.pow( i, 2 ) );
//         }
//     } );
//     return res;
// }
// console.log( squareOrSquareRoot( [ 4, 3, 9, 7, 2, 1 ] ) ); // -> [2,9,3,49,4,1]


////!N_2 usul
// function squareOrSquareRoot(array) {
//   return array.map((n) => {
//     let i = Math.sqrt(n);
//     return Number.isInteger(i) ? i : n * n;
//   });
// }
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // -> [2,9,3,49,4,1]
