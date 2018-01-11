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
            :items="stopedServiceHouses"
            :search="search"
            :rows-per-page-items="getTableActions()"
            :hide-actions="getPaginatorVisible()"
            rows-per-page-text="Количество строк"
            no-data-text="Нет данных для отображения"
            no-results-text="Нет результатов по Вашему запросу"
            class="elevation-2"
        >
            <template slot="items" slot-scope="props">
                <td v-ripple @click="goToHousePage(props.item.id)">{{ props.item.address }}</td>
                <td class="text-xs-right">{{ props.item.square | valueMask([2, ' ']) }} м<sup>2</sup></td>
                <td class="text-xs-right">{{ props.item.activity }}</td>
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
                'stopedServiceHouses'
            ])
        },
        methods: {
            goToHousePage(id) {
                this.$router.push({
                    name   : 'houses-info',
                    params : {
                        id : id
                    }
                });
            },
            getTableHeaders() {
                return [
                    {
                        text  : 'Адрес',
                        value : 'address',
                        align : 'center'
                    },
                    {
                        text  : 'Площадь',
                        value : 'square',
                        align : 'center'
                    },
                    {
                        text  : 'Тип деятельности',
                        value : 'activity',
                        align : 'center'
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
                return this.stopedServiceHouses.length < 25
            }
        },
        created() {
            this.$store.dispatch('clearHouseInfo');
        }
    } 
</script>
