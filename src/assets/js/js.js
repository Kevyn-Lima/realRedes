window.onscroll = function () {
  scroll();
};
function scroll() {
  let top = document.getElementById("scrolltop");
  if (document.documentElement.scrollTop > 100) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}
