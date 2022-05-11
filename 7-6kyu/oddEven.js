function oddEven (arr)
{
    let res = arr.sort( ( a, b ) => b - a );
    if ( res[ 0 ] % 2 == 0 )
    {
        console.log(true);
    } else
    {
        console.log(false);
    }
}
oddEven([1,2,5,9,33,7,6,12])