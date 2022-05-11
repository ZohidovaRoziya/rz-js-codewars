function getMiddle(s) {
  let sLen = s.length;
  let res = "";
  if (sLen % 2 == 0) {
    res += s[(sLen / 2) - 1] + s[sLen / 2];
  } else
  {
      res += s[Math.ceil((sLen/2)-1)]
    }
    console.log(res);
}
getMiddle("terest"); // =>"re"
