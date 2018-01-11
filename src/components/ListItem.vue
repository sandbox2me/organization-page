<template>
    <v-list-tile v-ripple>
        <v-list-tile-action>
            <v-icon color="indigo" v-if="icon">
                {{ icon }}
            </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                <template v-if="component">
                    <component :data="title" :is="component"></component>
                </template>
                <template v-else>
                    {{ title }}
                </template>
            </v-list-tile-title>
            <v-list-tile-sub-title v-if="text">
                <template v-if="subComponent">
                    <component :data="text" :is="subComponent"></component>
                </template>
                <template v-else>
                    {{ text }}
                </template>
            </v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    import Telephone from './Telephone.vue';
    import WorkTime from './WorkTime.vue';
    import WebLink from './WebLink.vue';
    import Email from './Email.vue';
    import Maps from './Maps';

    export default {
        props: [
            'icon',
            'title',
            'text',
            'component',
            'subComponent'
        ],
        components: {
            Telephone,
            WorkTime,
            WebLink,
            Email,
            Maps
        }
    } 
</script>
