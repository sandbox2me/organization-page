<template>
    <v-toolbar fixed clipped-left>
        <v-toolbar-side-icon @click.stop="toggleMenuVisible()"></v-toolbar-side-icon>
        <v-toolbar-title v-if="organizationInfo.app">
            {{ organizationInfo.app.name }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="organizationInfo.app">
            <v-btn :href="organizationInfo.app.lkHref" target="_blank">
                <v-icon>input</v-icon>
            </v-btn>
            <v-btn :href="organizationInfo.app.googleHref" target="_blank">
                <img :src="require( '../assets/img/content/store-google.png' )" height="25">
            </v-btn>
            <v-btn :href="organizationInfo.app.appleHref" target="_blank">
                <img :src="require( '../assets/img/content/store-apple.png' )" height="25">
            </v-btn>
        </template>

    </v-toolbar>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'organizationInfo'
            ])
        },
        methods: {
            ...mapActions([
                'toggleMenuVisible'
            ])
        }
    }
</script>