import * as items from '../../system/pagesList';

export default { 
    path: '/documents', 
    name: 'documents',
    component: items.Documents, 
    meta: { 
        name: 'Документы', 
        title: 'Документы', 
        usedInMenu: true,
        icon: 'description',
        slug: {
            name: 'documents',
            type: 'read'
        }
    }
}