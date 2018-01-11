# VUEX

## Структура:
 - Главный файл хранилища - `store.js`.
 - Модули хранилища вынесены в директорию `modules`.


## Управление хранилищем:
 - Для получения данных из хранилища используется `mapGetters`.
 - Для записи данных в хранилище используется `mapActions`.
 - После выполнения `mapActions` вызывает `mutation`, которое менет данные. 