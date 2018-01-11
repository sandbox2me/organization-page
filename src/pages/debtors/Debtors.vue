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
            v-if="debtors.length"
            :headers="getTableHeaders()"
            :rows-per-page-items="getTableActions()"
            :hide-actions="getPaginatorVisible()"
            :items="debtors"
            :search="search"
            rows-per-page-text="Количество строк"
            no-data-text="Нет данных для отображения"
            no-results-text="Нет результатов по Вашему запросу"
            class="elevation-2"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.address }}</td>
                <td class="text-xs-right">{{ props.item.value | valueMask }} ₽</td>
                <td width="40">
                    <v-layout justify-space-around class="mb-2">
                        <a :href="props.item.link" target="_blank" class="group pa-2">
                            <v-icon>attach_file</v-icon>
                        </a>
                    </v-layout>
                </td>        
            </template>
        </v-data-table>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        computed: {
            ...mapGetters([
                'debtors'
            ])
        },
        data() {
            return {
                search: ''
            }
        },
        methods: {
            getTableHeaders() {
                return [
                    {
                        text  : 'Адрес дома',
                        value : 'address',
                        align : 'left'
                    },
                    {
                        text  : 'Сумма',
                        value : 'value',
                        align : 'right'
                    },
                    {
                        text  : '',
                        sortable: false,
                        value : 'link'
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
                return this.debtors.length < 25
            }
        },
        created() {
            this.$store.dispatch('getDebtors');
        }
    } 
</script>

<style lang="stylus" scoped>
    a {
        text-decoration none;
    }
</style>
