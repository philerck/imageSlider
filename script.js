const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  width: document.querySelector('.slider ul'),
  arrow: document.querySelectorAll('.arrow'),
  maxWidth: 720,
  transform: 0,
  transition(el) {
    let move = 100;

    el.target.classList.contains('left') ? this.transform += move : this.transform -= move;

    if (this.transform > 0 || this.transform === ((this.slideList.childElementCount * 100)) * -1) {
      this.transform = 0;
    }
    this.slideList.style.transform = 'translateX(' + this.transform + '%)';
    //this.slideList.classList.add('slide');

  },
  click(el) {
    this.transition(el);
  },
  start() {
    let wrapper = document.querySelector('.slider__wrapper');
    wrapper.style.maxWidth = this.maxWidth + 'px';
    this.slideList.style.transition = 'transform 1s ease-in';
    slide.arrow.forEach(function (el) {
      el.addEventListener('click', (el) => slide.click(el));
    });
  }
};

slide.start();
