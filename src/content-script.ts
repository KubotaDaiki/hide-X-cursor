let moveTimer = 0;

window.addEventListener("mousemove", function () {
  clearTimeout(moveTimer);
  changeCursorShape("pointer");

  moveTimer = setTimeout(function () {
    changeCursorShape("none");
  }, 2000);
});

/**
 * 動画内のカーソル形状を変更する
 * @param shape カーソル形状（[形状の参考](https://developer.mozilla.org/ja/docs/Web/CSS/cursor)）
 */
function changeCursorShape(shape: string) {
  const videoControlClass =
    "css-175oi2r r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1loqt21";
  const videoControlElements =
    document.getElementsByClassName(videoControlClass) as HTMLCollectionOf<HTMLElement>;
  [...videoControlElements].forEach((video) => {
    video.style.cursor = shape;
  });
}
