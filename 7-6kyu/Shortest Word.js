function findShort ( s )
{
    let arr = s.split( " " )
   let res =  arr.sort( ( a, b ) => a.length - b.length )
    console.log(res[0].length);
}
findShort("Let's travel abroad shall we") // ->  2