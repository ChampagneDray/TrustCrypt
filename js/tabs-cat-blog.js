const tabItem = document.querySelectorAll('.tabs__btn-blog__item')
const tabContent = document.querySelectorAll('.tabs__content-blog__item')

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget  = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-blog__item--active');
  });

  tabTarget.classList.add('tabs__btn-blog__item--active');

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-blog__item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-blog__item--active')
}