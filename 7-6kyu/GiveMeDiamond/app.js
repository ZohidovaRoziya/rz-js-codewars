// function diamond ( n )
// {
//     if(n % 2 ==0 || n <= 0) return null
//     let res = ''
//     let middle = Math.ceil( n / 2 )
//     let space = middle
//     for (let i = 1; i <= n * 2; i++) {
//         if ( i % 2 == 1 )
//         {
//             if ( i <= middle * 2 )
//             {
//                 res += `${" ".repeat(--space)}${"*".repeat(i)}\n`
//             } else
//             {
//                 res += `${" ".repeat(++space)}${"*".repeat(n * 2 -i)}\n`
                
//             }
//         }
//     }
//     console.log(res);
// }
// diamond(7)


// function diamond ( n ) // -> 👍👍😊
// {
//     if(n % 2 ==0 || n <= 0) return null
//     let res = ''
//     let middle = Math.ceil( n / 2 )
//     let space = middle
//     for (let i = 1; i <= n * 2; i++) {
//         if ( i % 2 == 1 )
//         {
//             if ( i <= middle * 2 )
//             {
//                 res += `${"----".repeat(--space)}${"<".repeat(i)}\n`
//             } else
//             {
//                 res += `${"----".repeat(++space)}${"<".repeat(n * 2 -i)}\n`
                
//             }
//         } 
//     }
//     console.log(res);
// }
// diamond(25)