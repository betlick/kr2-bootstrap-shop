// 1. Фильтр каталога.
const filter = document.querySelector('#catalog-filter');

// Этот блок работает только на странице, где есть фильтр.
if (filter) {
  const category = document.querySelector('#category');
  const price = document.querySelector('#max-price');
  const cards = document.querySelectorAll('#product-list > [data-category]');

  function filterProducts() {
    let count = 0;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.hidden = false;

      if (category.value !== '' && card.dataset.category !== category.value) {
        card.hidden = true;
      }

      if (price.value !== '' && Number(card.dataset.price) > Number(price.value)) {
        card.hidden = true;
      }

      if (card.hidden === false) {
        count++;
      }
    }

    document.querySelector('#result-count').textContent = 'Найдено товаров: ' + count;
    document.querySelector('#empty-result').hidden = count > 0;
  }

  filter.oninput = filterProducts;
  filter.onsubmit = function (event) {
    event.preventDefault();
    filterProducts();
  };

  document.querySelector('#reset-filter').onclick = function () {
    filter.reset();
    filterProducts();
  };
}

// 2. Выбор товара по ссылке, например order.html?product=lamp.
const orderProduct = document.querySelector('#order-product');

if (orderProduct) {
  const product = new URLSearchParams(window.location.search).get('product');

  for (let i = 0; i < orderProduct.options.length; i++) {
    if (orderProduct.options[i].value === product) {
      orderProduct.value = product;
    }
  }
}

// 3. Подстановка товара в быструю заявку. Окно открывает Bootstrap.
const buttons = document.querySelectorAll('[data-product]');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.querySelector('#quick-order').reset();
    document.querySelector('#modal-product').value = this.dataset.product;
    document.querySelector('#form-result').hidden = true;
  };
}

// 4. Результат проверки формы. required, type и pattern проверяет браузер.
// На каждой странице находится только одна форма заявки.
const form = document.querySelector('[data-demo-form]');

if (form) {
  const result = document.querySelector('#form-result');

  form.onsubmit = function (event) {
    event.preventDefault(); // Не перезагружаем страницу и не отправляем данные.
    const select = form.querySelector('[name="product"]');
    const productName = select.options[select.selectedIndex].text;

    form.reset();
    result.textContent = 'Поля заявки на «' + productName + '» заполнены корректно.';
    result.hidden = false;

    if (form.id === 'quick-order') {
      // Закрываем окно через его обычную кнопку «Закрыть».
      document.querySelector('#orderModal [data-bs-dismiss="modal"]').click();
    } else {
      result.focus();
    }
  };

  function hideResult() {
    result.hidden = true;
  }

  form.oninput = hideResult;
  form.onreset = hideResult;
}
