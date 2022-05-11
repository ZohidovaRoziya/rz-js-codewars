function rgb(r, g, b) {
  let res = "";
  let rgb = Object.values(arguments);
  for (let i = 0; i < rgb.length; i++) {
    if (rgb[i] <= 0) {
      res += "00";
    } else if (rgb[i] >= 255) {
      res += "FF";
    } else {
      if (rgb[i].toString(16).length == 1) {
        res += `0${rgb[i].toString(16).toUpperCase()}`;
      } else {
        res += `${rgb[i].toString(16).toUpperCase()}`;
      }
    }
  }
  console.log(res);
}
rgb(1,92,12); // =>  'CB3109'
