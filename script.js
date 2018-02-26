const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  width: document.querySelector('.slider ul'),
  arrow: document.querySelectorAll('.arrow'),
  transform: 0,
  transition(el) {


    el.target.classList.contains('left') ? this.transform += this.width.offsetWidth : this.transform -= this.width.offsetWidth;

    console.log((this.slideList.childElementCount * this.width.offsetWidth) - this.width.offsetWidth);

    if (this.transform > 0 || this.transform === ((this.slideList.childElementCount * this.width.offsetWidth) * -1)) {
      this.transform = 0;
    }
    this.slideList.style.transform = 'translateX(' + this.transform + 'px)';
    this.slideList.classList.add('slide');
  },
  click(el) {
    this.transition(el);
  },
  start() {
    slide.arrow.forEach(function (el) {
      el.addEventListener('click', (el) => slide.click(el));
    });
  }
};

slide.start();
