const slide = {
  slideList: document.querySelector('.slider ul'),
  slideListItem: document.querySelectorAll('.slider ul li'),
  width: document.querySelector('.slider ul'),
  transform: 0,

  transition(el) {

    el.target.classList.contains('left') ? this.transform += this.width.offsetWidth : this.transform -= this.width.offsetWidth;

    this.slideList.style.transform = 'translateX(' + this.transform + 'px)';
    this.slideList.classList.add('slide');
  },
  click(el) {

    this.transition(el);
    //this.getActive();
  }
};
slide.arrow.forEach(function (el) {
  el.addEventListener('click', (el) => slide.click(el));
}););



