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
  transition() {
    let id = this.getElementId();
    console.log(this.width.offsetWidth);
    if (id != this.slideList.childElementCount) {
      this.slideList.style.transform = 'translateX(-' + this.transform + this.width.offsetWidth + 'px)';
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
  click() {
    //console.log(el);
    //let symbol;
    //el.target.classList.contains('left') ? symbol = '' : symbol = '-';
    this.transition();
    this.getActive();
  }
};

slide.start();

slide.right.addEventListener('click', () => slide.click());
slide.left.addEventListener('click', () => slide.click());



