// const button = document.querySelector(".navbar__ham");
// const menu = document.querySelector(".navbar__links");

// button.addEventListener("click", () => {
//   button.classList.toggle("open");
//   menu.classList.toggle("navbar__open");
// });

let numArray = [10, 8, 6, 5];
let numLessThanTen = numArray.filter((element, index, arr) => {
  console.log(element, index, arr);
});

let customers = [
  {
    name: "Naruto",
    address: "Konohagakure",
    payIsOnline: true,
  },
  {
    name: "Sasuke",
    address: "KonohaGakure",
    payIsOnline: false,
  },
  {
    name: "Sakura",
    address: "KonohaGakure",
    payIsOnline: false,
  },
  {
    name: "Hinata",
    address: "KonohaGakure",
    payIsOnline: true,
  },
];

const specialDiscountUsers = customers.filter(
  (customer) => customer.payIsOnline
);

const specialDiscountUsers2 = customers.filter(function (customer) {
  return customer.payIsOnline;
});

console.log(specialDiscountUsers);
