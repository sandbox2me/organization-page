import * as items from '../../system/pagesList';

export default { 
    path: '/information', 
    name: 'information',
    component: items.Information, 
    meta: { 
        name: 'Полезная информация', 
        title: 'Полезная информация', 
        usedInMenu: true,
        icon: 'help_outline',
        slug: {
            name: 'information',
            type: 'read'
        }
    } 
}