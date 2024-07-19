let moveTimer = 0;

window.addEventListener("mousemove", function () {
  clearTimeout(moveTimer);
  changeCursorShape("pointer");

  moveTimer = setTimeout(function () {
    changeCursorShape("none");
  }, 2000);
});

function changeCursorShape(shape) {
  const videoControlClass =
    "css-175oi2r r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1loqt21";
  const videoControlElements =
    document.getElementsByClassName(videoControlClass);
  [...videoControlElements].forEach((video) => {
    video.style.cursor = shape;
  });
}
