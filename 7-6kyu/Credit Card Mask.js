function maskify ( cc )
{
    let res = ''
  let arr = cc.split("").reverse().join("");
  for (let i = 0; i < arr.length; i++) {
      if ( i > 3 )
      {
        res += "#"
      } else
      {
          res += arr[i]
    }
    }
    console.log(res.split("").reverse().join(""));
}
maskify("4556364607935616"); // -> '############5616'

