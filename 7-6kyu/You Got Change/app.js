function giveChange(amount) {
  let h6 = parseInt(amount / 100);
  let h5 = parseInt((amount - h6 * 100) / 50)
  let h4 = parseInt((amount - h6 * 100 - h5 * 50) / 20)
  let h3 = parseInt((amount - h6 * 100 - h5 * 50 - h4 * 20) / 10)
  let h2 = parseInt((amount - h6 * 100 - h5 * 50 - h4 * 20 - h3 * 10) / 5)
  let h1 = parseInt((amount - h6 * 100 - h5 * 50 - h4 * 20 - h3 * 10 - h2 * 5) / 1)
  console.log([h1, h2, h3, h4, h5, h6]);
}
giveChange(365); // =>  [0,1,1,0,1,3]

