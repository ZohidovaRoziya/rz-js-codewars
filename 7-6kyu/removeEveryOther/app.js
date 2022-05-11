function removeEveryOther(arr) {
  //your code here
  let res1 = [];
  let res2 = [];
 for (let i = 0; i < arr.length; i++) {
     if ( i % 2 == 0 )
     {
         res1.push(arr[i])
     } else
     {
        res2.push(arr[i])
     }
     
 }
  console.log(res1);
}
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //=>[1, 3, 5, 7, 9]
