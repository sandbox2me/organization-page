<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-subheader>Описание</v-subheader>
            <v-layout row wrap>
                <v-flex xs12>
                    <div v-html="houseInfo.description"></div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>Основное</v-subheader>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line v-if="houseInfo.about">
                        <app-list-item
                            :title="'Вид обслуживания:'" 
                            :text="houseInfo.about.activity"
                        ></app-list-item>
                        <app-list-item
                            :title="'Дата начала обслуживания:'" 
                            :text="date(houseInfo.about.dateStart, 'DD.MM.YYYY')"
                        ></app-list-item>
                        <app-list-item
                            :title="'Общая площадь дома:'" 
                            :text="valueMask(houseInfo.about.square, [2, ' '])"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество этажей:'" 
                            :text="houseInfo.about.floors"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество жилых помещений:'" 
                            :text="houseInfo.about.residential"
                        ></app-list-item>
                        <app-list-item
                            :title="'Количество нежилых помещений:'" 
                            :text="houseInfo.about.uninhabited"
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-carousel hide-delimiters lazy v-if="houseInfo.images && houseInfo.images.length > 1">
                        <v-carousel-item 
                            v-for="(item, index) in houseInfo.images" 
                            :src="require( '../../assets/img/content/' + item )" 
                            :key="'houseView' + index"
                        ></v-carousel-item>
                    </v-carousel>
                    <app-parallax v-if="houseInfo.images && houseInfo.images.length === 1" :data="{ image: houseInfo.images[0], height: 450 }"></app-parallax>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>Расположение на карте</v-subheader>
            <v-layout row wrap v-if="houseInfo.address">
                <v-flex xs12>
                    <v-list two-line>
                        <app-list-item
                            :icon="'near_me'" 
                            :title="houseInfo.address.city" 
                            :text="houseInfo.address.street" 
                            :subComponent="'maps'"
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12>
                    <app-yandex-map 
                        :label="houseInfo.address.map" 
                        :height="400" 
                        :zoom="16"
                    ></app-yandex-map>
                </v-flex>
            </v-layout> 
        </v-container>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapFilters } from '../../system/filtersAccess';

    import appListItem from '../../components/ListItem.vue';
    import appParallax from '../../components/Parallax.vue';
    import appYandexMap from '../../components/YandexMap.vue';

    export default {
        computed: {
            ...mapGetters([
                'houseInfo'
            ])
        },
        methods: {
            ...mapFilters([
                'infoType',
                'phoneIcon',
                'date',
                'valueMask'
            ])
        },
        components: {
            appYandexMap,
            appParallax,
            appListItem
        }
    }
</script>