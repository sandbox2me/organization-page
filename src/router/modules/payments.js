import * as items from '../../system/pagesList';

export default { 
    path: '/payments', 
    name: 'payments',
    component: items.Payments, 
    meta: { 
        striked    : true,
        name       : 'Оплата квитанций', 
        title      : 'Оплата квитанций', 
        usedInMenu : true,
        icon: 'monetization_on',
        slug: {
            name: 'payments',
            type: 'read'
        }
    } 
}