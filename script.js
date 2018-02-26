const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  width: document.querySelector('.slider ul'),
  arrow: document.querySelectorAll('.arrow'),
  transform: 0,
  transition(el) {
    let move = 100;

    el.target.classList.contains('left') ? this.transform += move : this.transform -= move;

    if (this.transform > 0 || this.transform === ((this.slideList.childElementCount * 100)) * -1) {
      this.transform = 0;
    }
    this.slideList.style.transform = 'translateX(' + this.transform + '%)';
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
