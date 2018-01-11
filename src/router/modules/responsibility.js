import * as items from '../../system/pagesList';

export default { 
    path: '/responsibility',
    name: 'responsibility',
    component: items.Responsibility,
    meta: { 
        name: 'Ответственность', 
        title: 'Ответственность', 
        usedInMenu: true,
        icon: 'work',
        slug: {
            name: 'responsibility',
            type: 'read'
        }
    }
}