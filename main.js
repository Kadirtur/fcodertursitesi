/*  console.log('bağlantı okey')*/
const header = document.querySelector("header");

const menuBtn = document.querySelector("#menu-icon");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
