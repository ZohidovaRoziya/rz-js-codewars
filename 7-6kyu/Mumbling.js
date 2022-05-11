function accum ( s )
{
    let res = ''
    let i = 0
    while (i < s.length) {
        res += `-${s[ i ].toUpperCase()}`
        for (let j = 0; j < i; j++) {
            res += s[i].toLowerCase()
        }
        i++
    }
	// your code
    console.log(res.replace("-", ""));
}
accum("abcd") // -> "A-Bb-Ccc-Dddd"