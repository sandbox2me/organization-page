import * as items from '../../system/pagesList';

export default { 
    path: '/news', 
    name: 'news',
    component: items.News,
    redirect: {
        name: 'news-list' 
    },
    meta: { 
        name: 'Новости', 
        title: 'Новости', 
        usedInMenu: true,
        icon: 'rss_feed',
        slug: {
            name: 'news',
            type: 'read'
        }
    },
    children: [
        { 
            path: 'list', 
            name: 'news-list',
            component: items.NewsList,
            meta: { 
                name: 'Список новостей', 
                title: 'Список новостей', 
                usedInMenu: false,
                icon: false,
                slug: {
                    name: 'news',
                    type: 'read'
                }
            } 
        },
        { 
            path: ':id', 
            name: 'news-info',
            component: items.NewsInfo,
            meta: { 
                name: 'Подробнее о новости', 
                title: 'Подробнее о новости', 
                usedInMenu: false,
                icon: false,
                slug: {
                    name: 'news',
                    type: 'read'
                }
            } 
        }
    ] 
}