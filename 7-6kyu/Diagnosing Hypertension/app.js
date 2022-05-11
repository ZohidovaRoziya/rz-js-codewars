let hypertensive = function (patients) {
  // the codification of a function

  let count = 0;

  for (let i = 0; i < patients.length; i++) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let length = patients[i].length;
    for (let j = 0; j < length; j++) {
        let num = patients[ i ][ j ].split( "/" );
      if (length > 1) {
          sum1 += Number( num[ 0 ] );
        sum2 += Number(num[1]);
      }
      if (Number(num[0]) >= 180 && Number(num[1] >= 110)) {
        sum3++;
      }
    }
    if (sum1 / length >= 140 || sum2 / length >= 90 || sum3 >= 1) {
      count++;
    }
  }
  console.log(count);
  return count;
};
hypertensive([
  ["130/90", "140/84"],
  ["160/110"],
  ["200/120"],
  ["150/92", "140/90", "120/80"],
  ["140/94", "140/90", "120/80"],
]); //=> 1
