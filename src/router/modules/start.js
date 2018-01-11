import * as items from '../../system/pagesList';

export default { 
    path: '/', 
    name: 'start',
    component: items.Start, 
    meta: { 
        name: 'Главная страница', 
        title: 'Главная страница', 
        usedInMenu: true,
        icon: 'blur_on',
        slug: {
            name: 'all',
            type: 'read'
        }
    } 
}