import Vue from 'vue';
import { store } from '../store/store';

export default (to, from, next) => {
    let slugs = store.getters.organizationInfo.slugs;
    
    if (! slugs) {
        Vue.http.get('organizationInfo.json').then(response => {
            store.commit('setOrganizationInfo', response.data);
            slugs = response.data.slugs;
            checkSlugs();
        });
    } else {
        checkSlugs();
    }
    
    function checkSlugs() {
        let requirements = to.meta.slug;
        let result = true;
    
        if (requirements.name !== 'all' && ! slugs[requirements.name][requirements.type]) {
            result = { name: '403' }
        }
    
        document.title = to.meta.title;
        next(result);
    }
}