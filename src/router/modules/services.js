import * as items from '../../system/pagesList';

export default { 
    path: '/services',
    name: 'services',
    component: items.Services,
    meta: { 
        name: 'Услуги', 
        title: 'Услуги', 
        usedInMenu: true,
        icon: 'thumb_up',
        slug: {
            name: 'services',
            type: 'read'
        }
    }
}