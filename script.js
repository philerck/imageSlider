const slide = {
  active: 0,
  transform: 0,
  maxWidth: 720,
  sliderUl: document.querySelector('.slider ul'),
  bullets: document.querySelectorAll('.bullets__item'),

  move(direction) {
    this.bullets[this.active].style.fillOpacity = 0.6;
    if (direction === 'left' && this.transform != 0) {
      this.transform += 100;
      this.active -= 1;
    } else if (direction === 'right' && this.transform != -500) {
      this.transform -= 100;
      this.active += 1;
    }

    this.sliderUl.style.transform = 'translateX(' + this.transform + '%)';
    this.bullets[this.active].style.fillOpacity = 1;
  },


  start() {
    let btn__left, btn__right, slider;
    btn__left = document.querySelector('.btn__left');
    btn__right = document.querySelector('.btn__right');

    btn__left.addEventListener('click', () => this.move('left'));
    btn__right.addEventListener('click', () => this.move('right'));

    slider = document.querySelector('.slider');
    slider.style.maxWidth = this.maxWidth + 'px';

    this.sliderUl.style.transition = 'transform 1s ease-in';

    this.bullets[this.active].style.fillOpacity = 1;

  }


};

slide.start();
