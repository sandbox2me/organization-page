<template>
    <v-content>
        <v-container fluid grid-list-md v-if="houseInfo.passport">
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Вид жилого дома:'" 
                            :text="houseInfo.passport.type"
                        ></app-list-item>
                        <app-list-item
                            :title="'Состояние дома:'" 
                            :text="houseInfo.passport.state"
                        ></app-list-item>
                        <app-list-item
                            :title="'Год постройки:'" 
                            :text="date(houseInfo.passport.year, 'YYYY')"
                        ></app-list-item>
                        <app-list-item
                            :title="'Год ввода в эксплуатацию:'" 
                            :text="date(houseInfo.passport.in_use, 'YYYY')"
                        ></app-list-item>
                        <app-list-item
                            :title="'Тип дома:'" 
                            :text="houseInfo.passport.structure"
                        ></app-list-item>
                        <app-list-item
                            :title="'Серия, тип проекта:'" 
                            :text="houseInfo.passport.series"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество подъездов:'" 
                            :text="houseInfo.passport.entrances"
                        ></app-list-item>
                        <app-list-item
                            :title="'Общая площадь дома:'" 
                            :text="valueMask(houseInfo.passport.square_house, [2, ' '])"
                        ></app-list-item>
                        <app-list-item
                            :title="'Площадь жилых помещений:'" 
                            :text="valueMask(houseInfo.passport.square_living, [2, ' '])"
                        ></app-list-item>
                        <app-list-item
                            :title="'Площадь нежилых помещений:'" 
                            :text="valueMask(houseInfo.passport.square_notliving, [2, ' '])"
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Площадь общего имущества:'" 
                            :text="valueMask(houseInfo.passport.square_common, [2, ' '])"
                        ></app-list-item>
                        <app-list-item
                            :title="'Максимальное кол-во этажей:'" 
                            :text="houseInfo.passport.floor_min"
                        ></app-list-item>
                        <app-list-item
                            :title="'Минимальное кол-во этажей:'" 
                            :text="houseInfo.passport.floor_max"
                        ></app-list-item>
                        <app-list-item
                            :title="'Кол-во подземных этажей:'" 
                            :text="houseInfo.passport.floor_underground"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество лифтов:'" 
                            :text="houseInfo.passport.elevator"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество жилых помещений:'" 
                            :text="houseInfo.passport.areas_living"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество нежилых помещений:'" 
                            :text="houseInfo.passport.areas_not_living"
                        ></app-list-item>
                        <app-list-item
                            :title="'Кадастровый номер дома:'" 
                            :text="houseInfo.passport.cadastral"
                        ></app-list-item>
                        <app-list-item
                            :title="'Площадь земельного участка:'" 
                            :text="valueMask(houseInfo.passport.square_ground, [2, ' '])"
                        ></app-list-item>
                        <app-list-item
                            :title="'Площадь придомовой территории:'" 
                            :text="valueMask(houseInfo.passport.square_house_ground, [2, ' '])"
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapFilters } from '../../system/filtersAccess';

    import appListItem from '../../components/ListItem.vue';

    export default {
        computed: {
            ...mapGetters([
                'houseInfo'
            ])
        },
        methods: {
            ...mapFilters([
                'date',
                'valueMask'
            ])
        },
        components: {
            appListItem
        }
    }
</script>