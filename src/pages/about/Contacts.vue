<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-list two-line>
                        <app-list-item :title="organizationInfo.app.name"></app-list-item>
                    </v-list>
                    <v-layout row wrap>
                        <v-flex xs12 md6 v-for="(phone, index) in organizationInfo.contacts.phones" :key="'phone' + index">
                            <v-list two-line>
                                <app-list-item
                                    :icon="phoneIcon(phone.type)" 
                                    :title="infoType(phone.type) + ':'" 
                                    :text="phone" 
                                    :subComponent="'telephone'"
                                ></app-list-item>
                            </v-list>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-list two-line>
                                <app-list-item
                                    :icon="'email'" 
                                    :title="'Электронная почта:'" 
                                    :text="organizationInfo.contacts.email" 
                                    :subComponent="'email'"
                                ></app-list-item>
                            </v-list>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-list two-line>
                                <app-list-item
                                    :icon="'public'" 
                                    :title="'Сайт:'" 
                                    :text=" { link: organizationInfo.contacts.webSite, text: organizationInfo.contacts.webSite }"
                                    :subComponent="'webLink'"
                                ></app-list-item>
                            </v-list>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-list two-line>
                                <app-list-item
                                    :icon="'place'" 
                                    :title="'Фактический адрес:'" 
                                    :text="organizationInfo.actualAddress.address" 
                                    :subComponent="'maps'"
                                ></app-list-item>
                            </v-list>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-list two-line>
                                <app-list-item
                                    :icon="'near_me'" 
                                    :title="'Адрес для корреспонденции:'" 
                                    :text="organizationInfo.correspondenceAddress.address" 
                                    :subComponent="'maps'"
                                ></app-list-item>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row wrap v-if="organizationInfo.actualAddress.map">
                <v-flex xs12>
                    <app-yandex-map 
                        :label="organizationInfo.actualAddress.map" 
                        :height="400" 
                        :zoom="16"
                    ></app-yandex-map>
                </v-flex>
            </v-layout>
            <v-divider></v-divider> 
            <v-layout row wrap>
                <v-flex xs12 md6 v-for="(item, index) in organizationInfo.services" :key="'service' + index">
                    <v-list two-line>                    
                        <app-list-item :title="item.name"></app-list-item>
                        <v-layout row v-for="(access, index) in item.workTime.dates" :key="'workTime' + index">
                            <v-flex xs6>
                                <app-list-item 
                                    :icon="index === 0 ? 'access_time' : false"
                                    :title="access.day"  
                                    :text="access"
                                    :subComponent="'workTime'"
                                ></app-list-item>
                            </v-flex>
                            <v-flex xs6>
                                <app-list-item 
                                    :icon="index === 0 ? 'restaurant' : false"
                                    :title="'Обед'"  
                                    :text="access.lunch"
                                    :subComponent="'workTime'"
                                ></app-list-item>
                            </v-flex>
                        </v-layout>
                        <v-divider inset></v-divider>
                        <app-list-item
                            :icon="'near_me'" 
                            :title="item.address.city" 
                            :text="item.address.street" 
                            :subComponent="'maps'"
                        ></app-list-item>
                        <br>
                        <app-yandex-map 
                            :label="item.address.map" 
                            :height="400" 
                            :zoom="16"
                            v-if="item.address.map"
                        ></app-yandex-map>
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
    import appYandexMap from '../../components/YandexMap.vue';
    
    export default {
        computed: {
            ...mapGetters([
            'organizationInfo'
          ])
        },
        methods: {
            ...mapFilters([
                'phoneIcon',
                'infoType'
            ])
        },
        components: {
            appYandexMap,
            appListItem
        }
    }
</script>

<style lang="stylus" scoped>
    .divider {
        margin 20px 0;
    }
</style>
