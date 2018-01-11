<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-subheader>Основное</v-subheader>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Полное название организации:'" 
                            :text="organizationInfo.requisites.fullName" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Краткое название организации:'" 
                            :text="organizationInfo.requisites.shortName" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Фактический адрес:'" 
                            :text="organizationInfo.actualAddress.address"
                            :subComponent="'maps'"
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Адрес для корреспонденции:'" 
                            :text="organizationInfo.correspondenceAddress.address"
                            :subComponent="'maps'"
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Юридический адрес:'" 
                            :text="organizationInfo.legalAddress.address"
                            :subComponent="'maps'"
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>Реквизиты</v-subheader>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'КПП:'" 
                            :text="organizationInfo.requisites.kpp" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'ОКОПФ:'" 
                            :text="organizationInfo.requisites.okopf" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>ИНН</v-subheader>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Номер:'" 
                            :text="organizationInfo.requisites.inn.account" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Дата выдачи:'" 
                            :text="date(organizationInfo.requisites.inn.dateOfIssue, 'DD.MM.YYYY')" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12>
                    <v-list two-line>
                        <app-list-item
                            :title="'Зарегистрировавший орган:'" 
                            :text="organizationInfo.requisites.inn.registered" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>ОГРН</v-subheader>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Номер:'" 
                            :text="organizationInfo.requisites.ogrn.account" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Дата выдачи:'" 
                            :text="date(organizationInfo.requisites.ogrn.dateOfIssue, 'DD.MM.YYYY')" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12>
                    <v-list two-line>
                        <app-list-item
                            :title="'Зарегистрировавший орган:'" 
                            :text="organizationInfo.requisites.ogrn.registered" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>Расчетные счета</v-subheader>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Наименование банка:'" 
                            :text="organizationInfo.bank.name" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'БИК:'" 
                            :text="organizationInfo.bank.bik" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Корреспондентский счет:'" 
                            :text="organizationInfo.bank.correspondent" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs12 md6>
                    <v-list two-line>
                        <app-list-item
                            :title="'Расчетный счет'" 
                            :text="organizationInfo.bank.checking" 
                        ></app-list-item>
                    </v-list>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>Контакты</v-subheader>
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
                            :icon="'mail'" 
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
            <v-subheader>Фактический адрес</v-subheader>
            <v-layout row wrap v-if="organizationInfo.actualAddress.map">
                <v-flex xs12>
                    <app-yandex-map 
                        :label="organizationInfo.actualAddress.map" 
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
    import appYandexMap from '../../components/YandexMap.vue';
    
    export default {
        computed: {
            ...mapGetters([
            'organizationInfo'
          ])
        },
        methods: {
            ...mapFilters([
                'infoType',
                'phoneIcon',
                'date'
            ])
        },
        components: {
            appYandexMap,
            appListItem
        }
    }
</script>