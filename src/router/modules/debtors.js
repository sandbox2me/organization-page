import * as items from '../../system/pagesList';

export default { 
    path: '/debtors', 
    name: 'debtors',
    component: items.Debtors, 
    meta: { 
        name: 'Список должников', 
        title: 'Список должников', 
        usedInMenu: true,
        icon: 'error_outline',
        slug: {
            name: 'debtors',
            type: 'read'
        }
    } 
}