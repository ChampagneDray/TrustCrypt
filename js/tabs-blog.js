const tabItem = document.querySelectorAll('.tabs__btn-item__dop')
const tabContent = document.querySelectorAll('.tabs__content-item__dop')

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget  = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item__dop--active');
  });

  tabTarget.classList.add('tabs__btn-item__dop--active');

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item__dop--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item__dop--active')
}