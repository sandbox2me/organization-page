import { store } from '../store/store';

export default (slug) => {
    let slugs = store.getters.organizationInfo.slugs;
    let result = slug.name === 'all' || (slug.name !== 'all' && slugs && slugs[slug.name][slug.type]) || false;
    
    return result;
}