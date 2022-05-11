function capitalizeWord(word) {
  let res = word[0].toUpperCase() + word.slice(1);
  return res;
}
console.log(capitalizeWord('glasswear')); //=> 'Glasswear'