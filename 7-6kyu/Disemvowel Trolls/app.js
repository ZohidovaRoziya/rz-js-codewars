// function disemvowel ( str )
// {
//     let res1 = ''
//     for ( let i = 0; i < str.length; i++ )
//     {
//         if ( str[ i ].toLowerCase() == "a" )
//         { 
//             continue
//         } else if ( str[ i ].toLowerCase() == "e" )
//         {
//             continue
//         } else if ( str[ i ].toLowerCase() == "u" )
//         {
//             continue
//         } else if ( str[ i ].toLowerCase() == "i" )
//         {
//             continue
//         } else if ( str[ i ].toLowerCase() == "o" )
//         {
//             continue
//         } else
//         {
//             res1 += str[i]
//         }
//     }
//     console.log(res1);
// }
// disemvowel( "This website is for losers LOL!" ) //=> "Ths wbst s fr lsrs LL!"


////! N_2- usuli
function disemvowel(str) {
   console.log(str.replace(/[aeuio]/gi, ""));
}
disemvowel( "This website is for losers LOL!" ) //=> "Ths wbst s fr lsrs LL!"