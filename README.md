# Страница управляющей организации 

## Подготовка компьютера
 - Установить [node.js](https://nodejs.org)
 - Установить webpack `npm i -g webpack`.


## Запуск и сборка проекта
 - Команда для установки зависимостей `npm i`
 - Команда запуска проекта для разработки `npm run dev`.
 - Команда сборки проекта для продакшина `npm run prod`.
 - Команда для сборки проекта с анализатором бандлов: `npm run prod --report`.
 - Команда для первой сборки проекта `npm i && npm run prod`.


## Директории проекта:
 - `Компоненты` расположены в директории: [src/components/](src/components/).
 - `Страницы` расположены в директории: [src/pages/](src/pages/).
 - `Картинки` расположены в директории: [src/assets/img/content/](src/assets/img/content/).
 - `Стили` расположены в директории: [src/assets/styles/](src/assets/styles/).
 - `Файлы Favicon` расположены в директории: [src/assets/img/favicon/](src/assets/img/favicon/).
 - `Файлы ответов api` расположены в директории: [api/](api/).
 - `Вспомогательные файлы` расположены в директории: [src/system/](src/system/).
 - `Настройки сборки` расположены в директории: [config/](config).
 - `Собранный проект` автоматически генерирует директорию `dist`.


## Стили:
 - В проекте используется препроцессор `Stylus` и `Autoprefixer`.
 - Все файлы импортируются в общий файл `index.styl`.
 - Файл для подключения шрифтов `fonts.styl`.
 - Файл для подключения стилей компонентов `modules.styl`.
 - Файл с настройками страницы `fix.styl`.


## Сборка index.html
 - `index.html` собирается автоматически, используя `HtmlWebpackPlugin`.
 - Параметры сборки определены в файле `htmlParams` в папке конфигураций.


## Favicon:
 - Favicon работает `только` в собранном проекте!
 - В файл index.html добавлен meta с атрибутом `name="theme-color"` здает цвет статус бара в android. 
 - В файл index.html подключен файл `src/assets/img/favicon/windows_icons.xml` - иконки windows.
 - В файл index.html подключен файл `src/assets/img/favicon/android_icons.xml` - иконки android.
 - Список разрешений: `16х16`, `32х32`, `36х36`, `48х48`, `57х57`, `60х60`, `70х70`, `72х72`, `76х76`, `96х96`, `114х114`, `120х120`, `144х144`, `150х150`, `152х152`. `180х180`, `192х192`, `310х150`, `310х310`.


## Browsersync:
 - В проектк встроен `Browsersync` и `webpack dev server`.
 - webpack dev server доступен через порт `3000`.
 - Browsersync доступен через порт `8000`.
 - Browsersync UI доступен через порт `8001`.


## Псевдо API:
 - Для получения данных без BE можно использовать псевдо API.
 - Данные получают запросом к url `/api/name`.
 - Запросы прописываются в файл `api` в директории настроек сборки.
 - После внесения изменений в файл конфигурации api нужно перезапустить проект.


## Адаптивность:
 - xs `до 600px`.
 - sm `до 960px`.
 - md `до 1264px`.
 - lg `до 1904px`.
 - xl `от 1904px`.


## Ссылки
 - [Git](https://git-scm.com/downloads)
 - [Node.js](https://nodejs.org)
 - [Webpack](https://webpack.js.org)
 - [Vue.js](https://ru.vuejs.org)
 - [Vue router](https://router.vuejs.org/ru/)
 - [Vuex](https://vuex.vuejs.org/ru/)
 - [Vuetify](https://vuetifyjs.com)
 - [Vue Yandex maps](https://github.com/PNKBizz/vue-yandex-map)
 - [Moment.js](https://momentjs.com/)
 - [Stylus](http://stylus-lang.com)
 - [Browsersync](https://www.browsersync.io/)
 - [Awesome vue](https://github.com/vuejs/awesome-vue)
 - [Vue devtools](https://github.com/vuejs/vue-devtools)
 - [Material design](https://material.io)
 - [Material icons](https://material.io/icons/)


## Полезное
 - В компонентах `Material` src изображении должен быть: `:src="require('path/to/image')"`.
 - В файлах `*.vue` url изображения должен быть определн относитьльно компонента.
 - В файлах `*.styl` url изображения должен быть: `./assets/img/content/file`.
 - В фильтрах, при отсутствии аргументов скобки ставить `не нужно`.
