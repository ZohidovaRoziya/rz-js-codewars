////!N_1 usul
// function stringClean(s) {
//   let res = "";
//     for ( let i = 0; i < s.length; i++ )
//     {
//     if (isNaN(s[i])) {
//       if (s[i] === " ") {
//         res += " ";
//       } else {
//         res += s[i];
//       }
//     }
//   }
//   console.log(res);
// }
// stringClean("(E3at m2e2!!)"); //=> "(Eat me!!)"

////!N_2 usul
// function stringClean(s) {
//   let a = s.split("");
//   for (let i = 0; i < a.length; i++) {
//     parseInt(+a[i]) && (a[i] = "");
//   }
//   console.log(a.join(""));
// }
// stringClean("(E3at m2e2!!)"); //=> "(Eat me!!)"


////!N_3 usul
// function stringClean(s){
//   console.log( s.replace( /\d/g, "" ) );
//   ////* console.log(s.match(/\d/g)); //=> [ '3', '2', '2' ]
// }
// stringClean( "(E3at m2e2!!)" ); //=> "(Eat me!!)"


////!N_4 usul
// function stringClean(s){
//   console.log(s.replace(/[0-9]/g, ''));
// }
// stringClean( "(E3at m2e2!!)" ); //=> "(Eat me!!)"

