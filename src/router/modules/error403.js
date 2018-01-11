import * as items from '../../system/pagesList';

export default { 
    path: '/403', 
    name: '403',
    component: items.Error403, 
    meta: { 
        name: 'Ошибка 403', 
        title: 'Ошибка 403', 
        usedInMenu: false,
        icon: false,
        slug: {
            name: 'all',
            type: 'read'
        }
    } 
}