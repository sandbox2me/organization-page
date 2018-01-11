import * as items from '../../system/pagesList';

export default { 
    path: '/houses', 
    name: 'houses',
    component: items.Houses,
    redirect: {
        name: 'houses-list' 
    },
    meta: { 
        name: 'Дома', 
        title: 'Список домов', 
        usedInMenu: true,
        icon: 'location_city',
        slug: {
            name: 'houses',
            type: 'read'
        }
    },
    children: [
        { 
            path: 'list', 
            name: 'houses-list',
            component: items.HousesList,
            redirect: {
                name: 'houses-under-service-list' 
            },
            meta: { 
                name: 'Список домов', 
                title: 'Список домов', 
                usedInMenu: false,
                icon: false,
                slug: {
                    name: 'houses',
                    type: 'read'
                }
            },
            children: [
                {
                    path: 'underservice', 
                    name: 'houses-under-service-list',
                    component: items.HousesListServiced,
                    meta: { 
                        name: 'Дома под управлением', 
                        title: 'Дома под управлением', 
                        usedInMenu: false,
                        usedInTabs: true,
                        icon: false,
                        slug: {
                            name: 'houses-list',
                            type: 'read'
                        }
                    }
                },
                {
                    path: 'stopedservice', 
                    name: 'houses-stopped-service-list',
                    component: items.HousesListStopped,
                    meta: { 
                        name: 'Обслуживание прекращено', 
                        title: 'Обслуживание прекращено', 
                        usedInMenu: false,
                        usedInTabs: true,
                        icon: false,
                        slug: {
                            name: 'houses-history',
                            type: 'read'
                        }
                    }
                } 
            ]
        },
        { 
            path: 'list/:id', 
            name: 'houses-info',
            component: items.HouseInfo,
            redirect: {
                name: 'houses-about-house' 
            },
            meta: { 
                name: 'Информация о доме', 
                title: 'Информация о доме', 
                usedInMenu: false,
                icon: false,
                slug: {
                    name: 'houses-info',
                    type: 'read'
                }
            },
            children: [
                {
                    path: 'about', 
                    name: 'houses-about-house',
                    component: items.HouseAbout,
                    meta: { 
                        name: 'Общая информация', 
                        title: 'Общая информация', 
                        usedInMenu: false,
                        usedInTabs: true,
                        icon: false,
                        slug: {
                            name: 'houses-info',
                            type: 'read'
                        }
                    }
                },
                {
                    path: 'passsport', 
                    name: 'houses-passport-house',
                    component: items.HousePassport,
                    meta: { 
                        name: 'Паспорт дома', 
                        title: 'Паспорт дома', 
                        usedInMenu: false,
                        usedInTabs: true,
                        icon: false,
                        slug: {
                            name: 'houses-info',
                            type: 'read'
                        }
                    }
                },
                {
                    path: 'reports', 
                    name: 'houses-reports-house',
                    component: items.HouseReports,
                    meta: { 
                        name: 'Документы и отчетность', 
                        title: 'Документы и отчетность', 
                        usedInMenu: false,
                        usedInTabs: true,
                        icon: false,
                        slug: {
                            name: 'houses-info',
                            type: 'read'
                        }
                    }
                },
                {
                    path: 'property', 
                    name: 'houses-property-house',
                    component: items.HouseProperty,
                    meta: { 
                        name: 'Общее имущество', 
                        title: 'Общее имущество', 
                        usedInMenu: false,
                        usedInTabs: true,
                        icon: false,
                        slug: {
                            name: 'houses-info',
                            type: 'read'
                        }
                    }
                }
            ]
        }
    ] 
}