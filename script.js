const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  width: document.querySelector('.slider ul'),
  arrow: document.querySelectorAll('.arrow'),
  transform: 0,
  addActive() {
    this.slideListItem[0].classList.add('active');
  },
  transition(el) {

    el.target.classList.contains('left') ? this.transform += this.width.offsetWidth : this.transform -= this.width.offsetWidth;

    this.slideList.style.transform = 'translateX(' + this.transform + 'px)';
    this.slideList.classList.add('slide');
  },
  click(el) {
    this.transition(el);
    //this.getActive();
  },
  start() {
    this.addActive();
    let firstItem = document.querySelector('.slider ul li:first-child');
    firstItem.classList.contains('active') ? this.arrow[0].style.display = 'none' : this.arrow[0].style.display = 'block';
  }
};

slide.start();
slide.arrow.forEach(function (el) {
  el.addEventListener('click', (el) => slide.click(el));
});



