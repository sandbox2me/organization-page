<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs6 offset-xs6>
                    <v-text-field
                        append-icon="search"
                        label="Поиск"
                        v-model="search"
                    ></v-text-field>        
                </v-flex>
            </v-layout>
        </v-container>
        <v-data-table
            :headers="getTableHeaders()"
            :items="services"
            :search="search"
            :rows-per-page-items="getTableActions()"
            :hide-actions="getPaginatorVisible()"
            rows-per-page-text="Количество строк"
            no-data-text="Нет данных для отображения"
            no-results-text="Нет результатов по Вашему запросу"
            class="elevation-2"
        >
            <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.index + 1 }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left description">{{ props.item.description }}</td>
            </template>
        </v-data-table>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                search: ''
            }
        },
        computed: {
            ...mapGetters([
                'services'
            ])
        },
        methods: {
            getTableHeaders() {
                return [
                    {
                        text  : '№',
                        value : 'index',
                        sortable: false,
                        align : 'center'
                    },
                    {
                        text  : 'Наименование',
                        value : 'name',
                        sortable: false,
                        align : 'left'
                    },
                    {
                        text  : 'Обоснование',
                        value : 'description',
                        sortable: false,
                        align : 'left'
                    }
                ]
            },
            getTableActions() {
                return [
                    {
                        text: "25", 
                        value: 25
                    },
                    {
                        text: "50", 
                        value: 50
                    },
                    {
                        text: "75", 
                        value: 75
                    },
                    {
                        text: "100", 
                        value: 100
                    },
                    {
                        text: "Все", 
                        value: -1
                    }
                ]
            },
            getPaginatorVisible() {
                return this.services.length < 25
            }
        },
        created() {
            this.$store.dispatch('getServices');
        }
    } 
</script>

<style lang="stylus" scoped>
    .description {
        padding-top 5px !important;
        padding-bottom 5px !important;
    }
</style>
