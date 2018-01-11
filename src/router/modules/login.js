import * as items from '../../system/pagesList';

export default { 
    path: '/login', 
    name: 'login', 
    component: items.Login, 
    meta: { 
        name       : 'Вход в личный кабинет', 
        title      : 'Вход в личный кабинет', 
        usedInMenu : true,
        icon: 'input',
        slug: {
            name: 'login',
            type: 'read'
        }
    } 
}