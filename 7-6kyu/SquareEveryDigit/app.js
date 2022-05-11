function squareDigits ( num )
{
    let res = ''
    let arr = String( num ).split( "" )
    arr.map( ( i ) =>
    {
        res +=( +i)**2
    })
    console.log(res);
    return 0;
}
squareDigits(3212) //=> 9414