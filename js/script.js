const btnOpenEl = document.querySelector(".btn-open");
const btnCloseEl = document.querySelector(".btn-close");
const headerEl = document.querySelector(".header-mobile");
const btnModalOpenEl = document.querySelector(".button");
const btnModalCloseEl = document.querySelector(".btn-close-modal");
const modalEl = document.querySelector(".modal-overlay");

btnOpenEl.addEventListener("click", function () {
  headerEl.classList.add("is-open");
});

btnCloseEl.addEventListener("click", function () {
  headerEl.classList.remove("is-open");
});

btnModalOpenEl.addEventListener("click", function () {
  modalEl.classList.add("is-open");
});

btnModalCloseEl.addEventListener("click", function () {
  modalEl.classList.remove("is-open");
});
