const tabBtn = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.contentTab');
const circle = document.querySelectorAll('.tabCircle');
const underLine = document.querySelectorAll('.underline');

tabBtn.forEach(item => {
  item.addEventListener('click', function () {
    let tabId = item.getAttribute('data-tab');
    let tabCont = document.querySelector(tabId);
    let tabIdC = item.getAttribute('data-tabCircle');
    let tabCircle = document.querySelector(tabIdC);
    let tabIdUn = item.getAttribute('data-und');
    let tabUnder = document.querySelector(tabIdUn);

    content.forEach(item => {
      item.classList.remove('activeTwo');
    });
    circle.forEach(item => {
      item.classList.remove('active')
    });
    underLine.forEach(item => {
      item.classList.remove('activeThrue');
    });

    
    tabCont.classList.add('activeTwo');
    tabCircle.classList.add('active');
    tabUnder.classList.add('activeThrue');
  });
});

content[0].classList.add('activeTwo');
circle[0].classList.add('active');
underLine[0].classList.add('activeThrue');