function init() {
let position = 0;
const sliderToScroll = 1;
const sliderToShow = 1;
const slider = document.querySelector('.bannerSlider');
const sliderLine = document.querySelector('.bannerLine');
const sliderItem = document.querySelectorAll('.bannerItem');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let itemWidth = slider.clientWidth / sliderToShow;
let itemHeight = slider.clientHeight;
let movePosition = itemWidth * sliderToScroll;
let itemCount = sliderItem.length;
sliderLine.style.width = `${slider.clientWidth * itemCount}px`;

  sliderItem.forEach(function(item, index, array) {
    item.style.minWidth = `${itemWidth}px`;
    item.style.height = `${itemHeight}px`;
});

next.onclick = () => {
  let itemLeft = itemCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
  position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
  scroll();
  checkBtns();
}
prev.onclick = () => {
  let itemRight = Math.abs(position) / itemWidth;
  position += itemRight >= sliderToScroll ? movePosition : itemRight * itemWidthcheckBtns;
  scroll();
  checkBtns();
}
function scroll() {
  sliderLine.style.transform = `translateX(${position}px)`;
}
function checkBtns() {
  prev.disabled = position === 0;
  if(position === 0) {
  prev.style.background = `url(../images/prevbl.png)`;
  } else {
    prev.style.background = `url(../images/prev.png)`;
  }
  next.disabled = position <= -(itemCount - sliderToShow) * itemWidth;
  if(position <= -(itemCount - sliderToShow) * itemWidth) {
    next.style.background = `url(../images/nextbl.png)`;
  } else {
    next.style.background = `url(../images/next.png)`;
  }
}
checkBtns();
}
window.addEventListener('resize', init);
init();