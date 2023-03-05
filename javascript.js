// EventListener Example
// document.getElementById("btn").addEventListener("click", go2);
// document.getElementById("btn").addEventListener("contextmenu", go3);
// function go2() {
//   document.body.style.backgroundColor = "black";
// }
// function go3() {
//   document.body.style.backgroundColor = "white";
// }
// EventListener Example

const button = document.getElementById("btn");
const popup = document.getElementById("popupWrapper");
const close = document.getElementById("close");
button.addEventListener("click", function () {
  popupWrapper.style.display = "block";
});
close.addEventListener("click", function () {
  popupWrapper.style.display = "none";
});
