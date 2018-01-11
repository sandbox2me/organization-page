<template>
    <v-list-group :value="active" @click="toggleSubMenu()">
        <v-list-tile slot="item">
            <v-list-tile-action>
                <v-icon>{{ data.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{ data.meta.name }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-icon>expand_more</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        <app-menu-item v-for="(item, index) in data.children" :key="index" :data="item" v-if="item.meta.usedInMenu && itemGuard(item.meta.slug)"></app-menu-item>
    </v-list-group>
</template>

<script>
    import { router } from '../router/router';

    import itemGuard from '../system/itemGuard';
    import appMenuItem  from './MenuItem.vue';

    export default {
        props: [
            'data'
        ],
        data() {
            return {
                active: false
            }
        },
        methods: {
            toggleSubMenu() {
                this.active =! this.active;
            },
            setSubMenuState() {
                let children = this.data.children;
                let matches = router.history.current.matched;
                let pagesList = [];
                let result = false;

                children.forEach(item => {
                    pagesList.push(item.name);
                });

                matches.forEach(item => {
                    if (pagesList.includes(item.name)) {
                        result = true;
                    }
                });

                this.active = result || this.active;
            },
            itemGuard
        },
        components: {
            appMenuItem
        },
        watch: {
            '$route': function() {
                this.setSubMenuState();
            }
        }
    }
</script>