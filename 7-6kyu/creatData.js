function data() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1; // -> January is 0!
  let year = date.getFullYear();
  let today = `${String(day).padStart(2, 0)}/${String(month).padStart(2,0)}/${String(year)}`;
  console.log(today);
}
data();

