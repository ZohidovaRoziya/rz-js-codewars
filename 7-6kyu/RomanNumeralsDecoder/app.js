function solution(roman) {
  let res = 0;
  for (let i = 0; i < roman.length; i++) {
    switch (roman[i]) {
      case "I":
        if (roman[i + 1] == "V" || roman[i + 1] == "X") {
          res--;
        } else res++;
        break;
      case "V":
        res += 5;
        break;
      case "X":
        if (roman[i + 1] == "L" || roman[i + 1] == "C") {
          res -= 10;
        } else res += 10;
        break;
      case "L":
        res += 50;
        break;
      case "C":
        if (roman[i + 1] == "D" || roman[i + 1] == "M") {
          res -= 100;
        } else res += 100;
        break;
      case "D":
        if (roman[i + 1] == "M") {
          res -= 500;
        } else res += 500;
        break;
      case "M":
        res += 1000;
        break;
      default:
        break;
    }
    }
    console.log(res);
}
solution("MMCXCIII"); // => return 2193
