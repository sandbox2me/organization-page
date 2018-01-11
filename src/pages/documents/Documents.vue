<template>
    <v-content>
        <v-container fluid grid-list-md v-if="documentsList.length">
            <div v-for="(type, index) in documentsList" :key="'report_type' + index">
                <v-layout row wrap >
                    <v-subheader>{{ type.type }}</v-subheader>
                    <v-flex xs12>
                        <v-list two-line>
                            <app-list-item
                                v-for="(doc, index) in type.files"
                                :key="'document' + type.type + index"
                                :icon="'attach_file'"
                                :title="doc.name"
                                :text=" { link: doc.link, text: 'Скачать' }"
                                :subComponent="'webLink'"
                            ></app-list-item>
                        </v-list>
                    </v-flex>
                </v-layout>
                <template v-if="index !== documentsList.length - 1">
                    <v-divider></v-divider>
                </template>
            </div>
        </v-container>
    </v-content>
</template>


<script>
    import { mapGetters } from 'vuex';

    import appListItem from '../../components/ListItem.vue';

    export default {
        computed: {
            ...mapGetters([
                'documentsList'
            ])
        },
        components: {
            appListItem
        },
        created() {
            this.$store.dispatch('getDocumentsList');
        },
    }
</script>