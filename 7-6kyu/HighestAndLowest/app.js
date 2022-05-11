////! N_1-usul
// function highAndLow(numbers){
//     let n = numbers.split( " " )
//     let arr = []
//     n.map( ( i ) =>
//     {
//       arr.push(+i);
//     } )
//     let res = arr.sort( ( a, b ) => a - b )
//     console.log( `${res[res.length - 1]} ${res[0]}`);
// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // return "5 -3"

////! N_2-usul
// function highAndLow(numbers) {
//   let res = [];
//     let arr = numbers.split( " " ).map( ( i ) => +i );
//     res.push( arr.sort( ( a, b ) => a - b )[ arr.length - 1 ], arr.sort( ( a, b ) => a - b )[ 0 ] )
//     console.log( res.join(" ") );
//     return res.join(" ")
// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // return "42 -9"


////! N_3-usul
// function highAndLow(numbers){
//     numbers = numbers.split( ' ' ).map( Number );
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") // return "42 -9"