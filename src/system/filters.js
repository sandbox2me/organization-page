import Vue from 'vue';
import moment from 'moment';

// Установка маски телефону
Vue.filter('phoneMask', (value, arg) => {
    let reverse = value.split('').reverse();
    let codeLng = arg || 3;
    let rule    = {};
    let result  = [];

    if (value.length >= 5) {
        rule['1'] = '-';
        rule['3'] = '-';
    }

    if (value.length > 7) {
        rule[(value.length - codeLng - 2).toString()] = ') ';
        rule[(value.length - 2).toString()] = ' ('
    }

    reverse.forEach((item, index) => {
        result.push(item);

        if (rule[index]) {
            result.push(rule[index]);
        }
    });

    return result.reverse().join('');
});

// Установка маски числу
Vue.filter('valueMask', (value, arg) => {
    let precision  = arg && arg[0] ? arg[0] : 2;
    let separator1 = arg && arg[1] ? arg[1] : '\'';
    let separator2 = arg && arg[2] ? arg[2] : '\.';

    let strNumber = value || 0;
    
    let number = parseFloat(strNumber, 10);
    let parts = number.toFixed(precision).split('.');

    return parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + separator1) + (parts[1] ? separator2 + parts[1] : '');
});

// Преобразование дат
Vue.filter('date', (value, args) => {
    args = args || 'DD.MM.YYYY HH:MM';

    return value ? moment(value).format(args) : '';
});

// Преобразование иконок телефонов
Vue.filter('phoneIcon', (value) => {
    let result = '';

    if (value === 'work')   result = 'phone_android'; 
    if (value === 'home')   result = 'phone';
    if (value === 'mobile') result = 'phone_iphone';
    if (value === 'fax')    result = 'local_printshop';

    return result;
});

// Преобразование типов телефонов / адресов
Vue.filter('infoType', (value) => {
    let result = '';
    
    if (value === 'work')     result = 'Рабочий'; 
    if (value === 'home')     result = 'Домашний';
    if (value === 'mobile')   result = 'Мобильный';
    if (value === 'personal') result = 'Личный';
    if (value === 'fax')      result = 'Факс';

    return result;
});