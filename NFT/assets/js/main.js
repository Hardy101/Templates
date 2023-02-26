const toggle_btn = document.querySelector(".side_toggle");
const side_nav = document.querySelector(".side_info");
const overlay = document.querySelector(".overlay");

toggle_btn.addEventListener("click", () => {
  side_nav.classList.toggle("side_info_no_width");
  overlay.classList.toggle("no_display");
});
overlay.addEventListener("click", () => {
  side_nav.classList.toggle("side_info_no_width");
  overlay.classList.toggle("no_display");
});
