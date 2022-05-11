function amountOfPages(summary) {
    var i = 0;
    var str = '';
    while (str.length < summary) {
      i++;
      str += i;
    }
    return i;
  }
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
console.log(amountOfPages(660)); //=> 17