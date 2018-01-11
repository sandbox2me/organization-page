import * as items from '../../system/pagesList';

export default { 
    path: '/404', 
    name: '404',
    component: items.Error404, 
    meta: { 
        name: 'Ошибка 404', 
        title: 'Ошибка 404', 
        usedInMenu: false,
        icon: false,
        slug: {
            name: 'all',
            type: 'read'
        }
    } 
}