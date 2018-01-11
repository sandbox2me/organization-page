<template>
    <v-content>
        <v-container fluid grid-list-md>
            <template v-if="usefull.links && usefull.links.length">
                <v-subheader>Интернет-ресурсы</v-subheader>
                <v-layout row wrap>
                    <v-flex xs12 md6 
                        v-for="(link, index) in usefull.links"
                        :key="'link' + index">
                        <v-list two-line>
                            <app-list-item
                                :icon="'public'"
                                :title="link.name" 
                                :text=" { link: link.link, text: link.link }"
                                :subComponent="'webLink'" 
                            ></app-list-item>
                        </v-list>
                    </v-flex>
                </v-layout>
            </template>
            <template v-if="usefull.documents && usefull.documents.length">
                <div v-for="(type, index) in usefull.documents" :key="'documents' + type + index">
                    <v-divider></v-divider>
                    <v-subheader>{{ type.type }}</v-subheader>
                    <v-layout row wrap>
                        <v-flex xs12 
                            v-for="(doc, index) in type.files"
                            :key="'doc' + type + index">
                            <v-list two-line>
                                <app-list-item
                                    :icon="'attach_file'"
                                    :title="doc.name" 
                                    :text=" { link: doc.link, text: 'Скачать' }"
                                    :subComponent="'webLink'" 
                                ></app-list-item>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </div>
            </template>
        </v-container>
    </v-content>
</template>


<script>
    import { mapGetters } from 'vuex';

    import appListItem from '../../components/ListItem.vue';

    export default {
        computed: {
            ...mapGetters([
                'usefull'
            ])
        },
        components: {
            appListItem
        },
        created() {
            this.$store.dispatch('getUsefull');
        },
    }
</script>