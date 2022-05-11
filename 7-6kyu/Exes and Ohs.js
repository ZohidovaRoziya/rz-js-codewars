function XO ( str )
{
    let x = ''
    let o = ''
    for (let i = 0; i < str.length; i++) {
        if ( str[ i ].toLowerCase() == "x" )
        {
        x += str[i]
        } else if ( str[ i ].toLowerCase() == "o" )
        {
            o += str[i]
    } 
    }
    return x.length === o.length ? true : false
}
console.log(XO("xxOo")); // -> true