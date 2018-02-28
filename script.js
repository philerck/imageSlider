const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  width: document.querySelector('.slider ul'),
  arrow: document.querySelectorAll('.arrow'),
  maxWidth: 720,
  transform: 0,
  countImages: document.querySelector('.slider ul').childElementCount,
  transition(el) {
    let move = 100;

    el.target.classList.contains('left') || el.target.parentElement.classList.contains('left') ? this.transform += move : this.transform -= move;

    if (this.transform > 0 || this.transform === ((this.slideList.childElementCount * 100)) * -1) {
      this.transform = 0;
    }
    this.slideList.style.transform = 'translateX(' + this.transform + '%)';
    //this.slideList.classList.add('slide');

  },
  allElementsGetItemClass() {
    let itemNumber = 0;
    this.slideListItem.forEach(el => {
      el.id = 'item_' + itemNumber;
      itemNumber += 1;
    });
  },
  start() {
    this.allElementsGetItemClass();

    let firstLiElement = this.slideList.querySelector('li:first-child');
    firstLiElement.classList.add('active');

    let wrapper = document.querySelector('.slider');
    wrapper.style.maxWidth = this.maxWidth + 'px';

    this.slideList.style.transition = 'transform 1s ease-in';

    slide.arrow.forEach(function (el) {
      el.addEventListener('click', (el) => slide.transition(el));
    });

    let active = document.querySelector('.slider ul li.active');
    let activeIndex = active.getAttribute('id');
    console.log(activeIndex.split('_'));
  }
};

slide.start();
