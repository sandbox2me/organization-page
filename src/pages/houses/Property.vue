<template>
    <v-content>
        <v-container fluid grid-list-md v-if="houseInfo.documents">
            <v-layout row wrap >
                <v-flex xs12>
                    <v-list two-line>
                        <app-list-item
                            v-for="(doc, index) in houseInfo.documents"
                            :key="'document' + index"
                            :icon="'attach_file'"
                            :title="doc.name"
                            :text=" { link: doc.link, text: 'Скачать' }"
                            :subComponent="'webLink'"
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>            
        </v-container>
    </v-content>
</template>


<script>
    import { mapGetters } from 'vuex';

    import appListItem from '../../components/ListItem.vue';

    export default {
        computed: {
            ...mapGetters([
                'houseInfo'
            ])
        },
        components: {
            appListItem
        }
    }
</script>