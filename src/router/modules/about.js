import * as items from '../../system/pagesList';

export default { 
    path: '/about',
    name: 'about',
    component: items.About,
    redirect: {
        name: 'about-management' 
    },
    meta: { 
        name: 'О компании', 
        title: 'О компании',
        usedInMenu: true,
        icon: 'domain',
        slug: {
            name: 'about',
            type: 'read'
        }
    },
    children: [
        { 
            path: '', 
            name: 'about-management',
            component: items.AboutManagement,
            meta: { 
                name: 'Руководство', 
                title: 'Руководство', 
                usedInMenu: true,
                icon: false,
                slug: {
                    name: 'about-management',
                    type: 'read'
                }
            } 
        },
        { 
            path: 'requisites',
            name: 'about-requisites',
            component: items.AboutRequisites,
            meta: { 
                name: 'Реквизиты', 
                title: 'Реквизиты', 
                usedInMenu: true,
                icon: false,
                slug: {
                    name: 'about-requisites',
                    type: 'read'
                }
            } 
        },
        { 
            path: 'licenses',
            name: 'about-licenses',
            component: items.AboutLicenses, 
            meta: { 
                name: 'Лицензии и сертификаты', 
                title: 'Лицензии и сертификаты', 
                usedInMenu: true,
                icon: false,
                slug: {
                    name: 'about-licenses',
                    type: 'read'
                }
            } 
        },
        { 
            path: 'contacts',
            name: 'about-contacts',
            component: items.AboutContacts, 
            meta: { 
                name: 'Контакты', 
                title: 'Контакты', 
                usedInMenu: true,
                icon: false,
                slug: {
                    name: 'about-contacts',
                    type: 'read'
                }
            } 
        }
    ]
}