<template>
    <v-content>
        <v-container fluid grid-list-md>
            <app-card-list :items="newsList" :more="4" :link="'news-info'"></app-card-list>
        </v-container>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';

    import appCardList from '../../components/CardList.vue';

    export default {
        computed: {
            ...mapGetters([
                'newsList'
            ])
        },
        components: {
            appCardList
        }
    } 
</script>