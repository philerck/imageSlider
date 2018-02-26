const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  left: document.querySelector('.left'),
  right: document.querySelector('.right'),
  item: 0,
  width: document.querySelector('.slider ul'),
  transform: 0,
  setActive() {
    this.slideListItem[0].classList.add('active');
  },
  setDataItem() {
    this.slideListItem.forEach((el) => {
      el.setAttribute('data-item', this.item + 1);
      this.item++;
    });
  },
  getElementId() {
    let itemClass = document.querySelector('.slider .active');
    let itemId = itemClass.getAttribute('data-item');
    return parseInt(itemId);
  },
  dir(direction, transform, width) {
    console.log(transform);
    console.log(width);
    return direction === 'left' ? transform - width : transform + width;
  },
  transition(direction) {
    let id = this.getElementId();
    let wert = this.dir(direction, this.transform, this.width.offsetWidth);
    console.log(wert);
    if (id != this.slideList.childElementCount) {
      this.slideList.style.transform = 'translateX(-' + wert + 'px)';
      this.slideList.classList.add('slide');
    } else {
      this.slideList.style.transform = 'translateX(0px)';
      this.slideList.classList.add('slide');
    }
  },
  getActive() {
    let itemClass = document.querySelector('.slider .active');
    itemClass.classList.remove('active');
    if (itemClass.nextSibling.nextSibling != null) {
      let sibling = itemClass.nextSibling.nextSibling;
      sibling.classList.add('active');
    } else {
      this.slideListItem[0].classList.add('active');
    }
  },
  start() {
    this.setActive();
    this.setDataItem();
  },
  click(el) {
    let direction;
    el.target.classList.contains('left') ? direction = 'left' : direction = 'right';
    this.transition(direction);
    this.getActive();
  }
};

slide.start();

slide.right.addEventListener('click', (el) => slide.click(el));
slide.left.addEventListener('click', (el) => slide.click(el));



