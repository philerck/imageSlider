const slide = {
  active: 0,
  transform: 0,
  maxWidth: 720,
  sliderUl: document.querySelector('.slider ul'),
  countImages: document.querySelector('.slider ul').childElementCount,

  move(direction) {
    let slideEnd = (((this.countImages * 100) - 100) * -1);
    let allBullets = document.querySelectorAll('.bullets__item');

    allBullets[this.active].classList.remove('active');

    if (direction === 'left' && this.transform != 0) {
      this.transform += 100;
      this.active -= 1;
    } else if (direction === 'right' && this.transform != slideEnd) {
      this.transform -= 100;
      this.active += 1;
    } else if (direction === 'right' && this.transform == slideEnd) {
      this.transform = 0;
      this.active = 0;
    }

    this.sliderUl.style.transform = 'translateX(' + this.transform + '%)';

    allBullets[this.active].classList.add('active');

  },
  moveBullets(el) {
    let id = parseInt(el.currentTarget.id);

    let allBullets = document.querySelectorAll('.bullets__item');
    allBullets[this.active].classList.remove('active');

    this.transform = -100 * id;
    this.active = id;

    this.sliderUl.style.transform = 'translateX(' + this.transform + '%)';

    allBullets[id].classList.add('active');

  },

  addBullets() {
    let bullet = document.createElement('div');
    bullet.classList.add('bullets');
    document.querySelector('.slider').appendChild(bullet);

    let allBullets = document.querySelector('.bullets');

    for (let i = 0; i < this.countImages; i++) {
      let bulletItem = document.createElement('div');

      bulletItem.classList.add('bullets__item');
      bulletItem.id = i;

      bulletItem.innerHTML = ' <svg viewbox="0 0 200 200" class="slider__circle"><circle cx="100" cy="100" r="90" /></svg>';

      allBullets.appendChild(bulletItem);
    }

    let allCreatedBullets = document.querySelectorAll('.bullets__item');
    allCreatedBullets.forEach(el => {
      el.addEventListener('click', (el) => this.moveBullets(el));
    });
  },

  addArrows() {
    let container = document.querySelector('.slider');
    let svg_left = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg_left.setAttribute('class', 'btn btn__left');
    svg_left.setAttribute('version', '1.1');
    svg_left.setAttribute('viewBox', '0 0 50 50');

    let polyline_left = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline_left.setAttribute('points', '20,2 2,24 20,48');

    svg_left.appendChild(polyline_left);

    let svg_right = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg_right.setAttribute('class', 'btn btn__right');
    svg_right.setAttribute('version', '1.1');
    svg_right.setAttribute('viewBox', '0 0 50 50');

    let polyline_right = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline_right.setAttribute('points', '30,2 48,24 30,48');

    svg_left.appendChild(polyline_left);
    container.appendChild(svg_left);

    svg_right.appendChild(polyline_right);
    container.appendChild(svg_right);
  },

  start() {

    this.addArrows();

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
    bullets[this.active].classList.add('active');
  }


};

slide.start();
