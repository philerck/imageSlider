const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  bullets: document.querySelectorAll('.bulletsForImages__bullet'),
  width: document.querySelector('.slider ul'),
  maxWidth: 650,
  transform: 0,
  transition(el) {
    let move = 100;

    el.target.classList.contains('left') || el.target.parentElement.classList.contains('left') ? this.transform += move : this.transform -= move;

    if (this.transform > 0 || this.transform === ((this.slideList.childElementCount * 100)) * -1) {
      this.transform = 0;
    }
    this.slideList.style.transform = 'translateX(' + this.transform + '%)';
    //this.slideList.classList.add('slide');

  },
  setNewElementActive(index, direction) {
    console.log(index);
    if (direction === 'right') {
      console.log(this.slideListItem[index]);
      this.slideListItem[index - 1].classList.remove('active');
      this.slideListItem[index].classList.add('active');
    } else {
      this.slideListItem[index - 1].classList.remove('active');
      this.slideListItem[index - 2].classList.add('active');
    }
  },
  move(direction) {
    let index = this.getActiveID(direction);
    this.setNewElementActive(index, direction);
    let transformInProzent = index * direction;
    this.slideList.style.transform = 'translateX(' + transformInProzent + '%)';
  },
  getActiveID(direction) {
    let activeElement = document.querySelector('.slider ul li.active');
    activeElement = activeElement.getAttribute('id').split('_');
    let activeElementIndex = activeElement[1];
    console.log(direction);
    direction === 'left' ? activeElementIndex -= 1 : activeElementIndex;
    return activeElementIndex;
  },
  allElementsGetItemClass() {
    let itemNumber = 1;
    this.slideListItem.forEach(el => {
      el.id = 'item_' + itemNumber;
      itemNumber += 1;
    });
    let bulletNumber = 1;
    this.bullets.forEach(el => {
      el.id = 'bullet_' + bulletNumber;
      bulletNumber += 1;
    });
  },
  start() {
    this.allElementsGetItemClass();

    let firstLiElement = this.slideList.querySelector('li:first-child');
    firstLiElement.classList.add('active');

    let wrapper = document.querySelector('.slider');
    wrapper.style.maxWidth = this.maxWidth + 'px';
    this.slideList.style.transition = 'transform 1s ease-in';

    let leftBtn = document.querySelector('img.left');
    leftBtn.addEventListener('click', () => this.move('left'));

    let rightBtn = document.querySelector('img.right');
    rightBtn.addEventListener('click', () => this.move('right'));
  }
};

slide.start();
