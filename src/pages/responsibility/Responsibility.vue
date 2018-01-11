<template>
    <v-content>
        <v-data-table
            v-if="responsibility.length"
            :headers="getTableHeaders()"
            :items="responsibility"
            :rows-per-page-items="getTableActions()"
            :hide-actions="getPaginatorVisible()"
            rows-per-page-text="Количество строк"
            no-data-text="Нет данных для отображения"
            no-results-text="Нет результатов по Вашему запросу"
            class="elevation-2"
            item-key="date"
        >
            <template slot="items" slot-scope="props">
                <tr @click="props.expanded = !props.expanded">
                    <td>{{ props.item.date | date('DD.MM.YYYY') }}</td>
                    <td>{{ props.item.reason }}</td>
                    <td class="text-xs-right">{{ props.item.fine | valueMask }} ₽</td>
                </tr>
            </template>
            <template slot="expand" slot-scope="props">
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-list two-line>
                            <app-list-item
                                :title="'Лицо привлеченное к ответственности:'" 
                                :text="props.item.description.responsible_item" 
                            ></app-list-item>
                            <app-list-item
                                :title="'Контроллирующий орган:'" 
                                :text="props.item.description.checking_item" 
                            ></app-list-item>
                            <app-list-item
                                :title="'Количество выявленных нарушений:'" 
                                :text="props.item.description.violations" 
                            ></app-list-item>
                            <app-list-item
                                v-for="(doc, index) in props.item.description.documents"
                                :key="'document' + index"
                                :icon="'attach_file'"
                                :title="doc.name"
                                :text=" { link: doc.link, text: 'Скачать' }"
                                :subComponent="'webLink'"
                            ></app-list-item>
                        </v-list>
                    </v-flex>
                </v-layout>
                <template v-if="props.item.description.events && props.item.description.events.length">
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-subheader>Мероприятия, проведенные для устранения административного правонарушения:</v-subheader>
                            <div class="subtext" v-html="props.item.description.events"></div>
                        </v-flex>
                    </v-layout>
                </template>
            </template>
        </v-data-table>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    import appListItem from '../../components/ListItem.vue';

    export default {
        computed: {
            ...mapGetters([
                'responsibility'
            ])
        },
        methods: {
            getTableHeaders() {
                return [
                    {
                        text  : 'Дата привлечения к ответственности',
                        value : 'date',
                        align : 'left'
                    },
                    {
                        text  : 'Предмет административного нарушения',
                        value : 'reason',
                        align : 'left'
                    },
                    {
                        text  : 'Размер штрафа',
                        value : 'fine',
                        align : 'right'
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
                return this.responsibility.length < 25
            }
        },
        components: {
            appListItem
        },
        created() {
            this.$store.dispatch('getResponsibility');
        }
    } 
</script>

<style lang="stylus" scoped>
    .subtext {
        padding-left 20px;
        padding-right 20px;
    }
</style>
