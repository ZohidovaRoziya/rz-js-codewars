function perimeter ( n )
{
    let num1 = 0;
    let num2 = 1;
    let sum;
    for (let i = 1; i <= n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum
    }
  console.log(sum);
}
perimeter(5), 80;

// var number = 10;
// var n1 = 0;
// var n2 = 1;
// var nextTrem;
// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTrem = n1 + n2;
//   n1 = n2;
//   n2 = nextTrem;
// }


