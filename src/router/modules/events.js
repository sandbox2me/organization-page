import * as items from '../../system/pagesList';

export default { 
    path: '/events', 
    name: 'events',
    component: items.Events,
    redirect: {
        name: 'events-list' 
    },
    meta: { 
        name: 'Мероприятия', 
        title: 'Мероприятия', 
        usedInMenu: true,
        icon: 'date_range',
        slug: {
            name: 'events',
            type: 'read'
        }
    },
    children: [
        { 
            path: 'list', 
            name: 'events-list',
            component: items.EventsList,
            meta: { 
                name: 'Список мероприятий', 
                title: 'Список мероприятий', 
                usedInMenu: false,
                icon: false,
                slug: {
                    name: 'events',
                    type: 'read'
                }
            } 
        },
        { 
            path: ':id', 
            name: 'event-info',
            component: items.EventsInfo,
            meta: { 
                name: 'Подробнее о мероприятии', 
                title: 'Подробнее о мероприятии', 
                usedInMenu: false,
                icon: false,
                slug: {
                    name: 'events',
                    type: 'read'
                }
            } 
        }
    ] 
}