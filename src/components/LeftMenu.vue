<template>
    <v-navigation-drawer fixed temporary v-model="menuVisible" class="navigation">
        <v-list dense>
            <app-menu-card></app-menu-card>
            <div v-for="item in $router.options.routes" :key="item.meta.name">
                <v-divider v-if="item.meta.striked"></v-divider>
                <component :data="item" :is="getComponentName(item)" v-if="item.meta.usedInMenu && itemGuard(item.meta.slug)"></component>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';
    import { store } from '../store/store';

    import itemGuard from '../system/itemGuard';

    import appMenuItem  from './MenuItem.vue';
    import appMenuCard  from './MenuCard.vue';
    import appMenuGroup from './MenuGroup.vue';
    
    export default {
        computed: {
            menuVisible: {
                get() {
                    return this.$store.getters.menuVisible;
                },
                set(value) {
                    if (! value) {
                        this.toggleMenuVisible();
                    }
                }
            }
        },
        methods: {
            ...mapActions([
                'toggleMenuVisible'
            ]),
            getComponentName(data) {
                let componentName = 'appMenuItem';

                if ('children' in data) {
                    data.children.forEach(function(item) {
                        if (item.meta.usedInMenu) {
                            componentName = 'appMenuGroup';   
                        }
                    });
                }

                return componentName;
            },
            itemGuard
        },
        components: {
            appMenuItem,
            appMenuCard,
            appMenuGroup
        }
    }
</script>

<style lang="stylus" scoped>
    .navigation {
        padding-bottom: 0;
    }
</style>