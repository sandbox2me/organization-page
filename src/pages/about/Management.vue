<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="(item, index) in managementPageContent" :key="index" xs6 lg3>
                    <app-manager-card :data="item"></app-manager-card>
                </v-flex>
            </v-layout>    
        </v-container>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    import appManagerCard from '../../components/ManagerCard.vue';

    export default {
        computed: {
            ...mapGetters([
                'managementPageContent'
            ])
        },
        created() {
            this.$store.dispatch('getManagementContent');
        },
        components: {
            appManagerCard
        }
    } 
</script>