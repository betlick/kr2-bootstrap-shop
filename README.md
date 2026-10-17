# Study Store — контрольная работа №2

**Тема:** «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке».

**Автор:** Гугуев Николай Сергеевич, группа ЭФБО-03-25.

Репозиторий для сдачи: https://github.com/betlick/kr2-bootstrap-shop

## Запуск

Открыть `index.html` через Live Server в VS Code. Сборка, npm и установка библиотек не нужны. Можно открыть HTML напрямую в браузере: все ресурсы подключены относительными путями.

## Подключение Bootstrap
В проекте Bootstrap подключён локально. Файлы фреймворка
размещены в папке `vendor/bootstrap/`.
Используются:
- `vendor/bootstrap/css/bootstrap.min.css`;
- `vendor/bootstrap/js/bootstrap.bundle.min.js`
```

## Структура

```text
kr2-bootstrap-shop/
├── index.html                # Hero, преимущества, популярные товары
├── catalog.html              # Фильтр, карточки, сравнение, modal
├── product.html              # Три описания с якорями, таблицы, tabs, FAQ
├── order.html                # Полная форма заявки
├── css/custom.css            # Размеры изображений, hover, мобильные уточнения
├── js/main.js                # Фильтр, подстановка товара, учебная отправка
├── images/                   # Локальные фотографии из предыдущего учебного проекта
├── vendor/bootstrap/         # Локальные CSS, JS Bundle и лицензия
├── README.md
├── DEFENSE.md                # Разбор кода и подготовка к защите
└── .gitignore
```

