import * as items from '../../system/pagesList';

export default { 
    path: '/meetings', 
    name: 'meetings',
    component: items.Meetings,
    meta: { 
        name: 'Собрания', 
        title: 'Собрания', 
        usedInMenu: true,
        icon: 'supervisor_account',
        slug: {
            name: 'meetings',
            type: 'read'
        }
    } 
}