function descendingOrder ( n )
{
    let arr = String(n).split( "" ).sort((a,b) => b-a);
    console.log(+(arr.join("")));
}
descendingOrder(738164925) //=> 987654321