const slide = {
  active: 0,
  transform: 0,
  maxWidth: 720,
  sliderUl: document.querySelector('.slider ul'),
  countImages: document.querySelector('.slider ul').childElementCount,

  move(direction) {
    let allBullets = document.querySelectorAll('.bullets__item');

    allBullets[this.active].style.fillOpacity = 0.6;
    if (direction === 'left' && this.transform != 0) {
      this.transform += 100;
      this.active -= 1;
    } else if (direction === 'right' && this.transform != -500) {
      this.transform -= 100;
      this.active += 1;
    }

    this.sliderUl.style.transform = 'translateX(' + this.transform + '%)';
    allBullets[this.active].style.fillOpacity = 1;
  },

  addBullets() {
    let allBullets = document.querySelector('.bullets');

    for (let i = 0; i < this.countImages; i++) {
      let bulletItem = document.createElement('div');
      bulletItem.classList.add('bullets__item');
      bulletItem.innerHTML = ' <svg viewbox="0 0 200 200" class="slider__circle"><circle cx="100" cy="100" r="90" /></svg>';
      allBullets.appendChild(bulletItem);
    }
  },

  start() {
    let btn__left, btn__right, slider;
    btn__left = document.querySelector('.btn__left');
    btn__right = document.querySelector('.btn__right');

    this.addBullets();

    btn__left.addEventListener('click', () => this.move('left'));
    btn__right.addEventListener('click', () => this.move('right'));

    slider = document.querySelector('.slider');
    slider.style.maxWidth = this.maxWidth + 'px';

    this.sliderUl.style.transition = 'transform 1s ease-in';


    let bullets = document.querySelectorAll('.bullets__item');
    bullets[this.active].style.fillOpacity = 1;


  }


};

slide.start();
