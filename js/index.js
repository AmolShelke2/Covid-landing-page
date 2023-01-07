// const button = document.querySelector(".navbar__ham");
// const menu = document.querySelector(".navbar__links");

// button.addEventListener("click", () => {
//   button.classList.toggle("open");
//   menu.classList.toggle("navbar__open");
// });

let numArray = [10, 8, 6, 5, 4, 2, 1, 18, 12];
let numLessThanTen = numArray.filter((num, index, arr) => {
  console.log(num, index, arr);
});
console.log(numLessThanTen);
