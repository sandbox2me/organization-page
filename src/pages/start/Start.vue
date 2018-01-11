<template>
    <v-content>
        <v-container fluid>
            <p class="display-1">{{ startPageContent.header }}</p>
            <div v-html="startPageContent.content"></div>
        </v-container>
        <template v-if="startPageContent.newsOnStart && startPageContent.newsOnStart.enabled">
            <v-divider></v-divider>
            <v-container fluid grid-list-md>
                <p class="display-1">Последние новости</p>
                <app-card-list :items="newsList" :link="'news-info'" :limit="startPageContent.newsOnStart.limit"></app-card-list>
            </v-container>
        </template>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';

    import appCardList from '../../components/CardList.vue';

    export default {
        computed: {
            ...mapGetters([
                'startPageContent',
                'newsList'
            ])
        },
        created() {
            this.$store.dispatch('getStartPageContent');
            this.$store.dispatch('getNewsList');
        },
        components: {
            appCardList
        }
    } 
</script>
