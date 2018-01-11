<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-subheader>Лицензии</v-subheader>
            <v-layout row wrap>
                <v-flex xs6 v-for="(license, index) in organizationInfo.licenses" :key="'license' + index">
                    <v-layout row wrap>
                        <v-flex xs4>
                            <app-drift-image :src="require( '../../assets/img/content/' + license.image )"></app-drift-image>
                        </v-flex>
                        <v-flex xs8>
                            <div class="headline pl-4 pt-2">{{ license.name }}</div>
                            <div class="pl-4 pt-5" v-html="license.desc"></div>
                            <div class="pl-3 pt-5">
                                <a :href="require('../../assets/img/content/' + license.image)">
                                    <v-btn color="primary">Скачать файл</v-btn>
                                </a>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-subheader>Сертификаты</v-subheader>
            <v-layout row wrap>
                <v-flex xs6 v-for="(certificate, index) in organizationInfo.certificates" :key="'certificate' + index">
                    <v-layout row wrap>
                        <v-flex xs4>
                            <app-drift-image :src="require('../../assets/img/content/' + certificate.image)"></app-drift-image>
                        </v-flex>
                        <v-flex xs8>
                            <div class="headline pl-4 pt-2">{{ certificate.name }}</div>
                            <div class="pl-4 pt-5" v-html="certificate.desc"></div>
                            <div class="pl-3 pt-5">
                                <a :href="require('../../assets/img/content/' + certificate.image)">
                                    <v-btn color="primary">Скачать файл</v-btn>
                                </a>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    import appDriftImage from '../../components/DriftImage.vue';

    export default {
        computed: {
            ...mapGetters([
            'organizationInfo'
          ])
        },
        components: {
            appDriftImage
        }
    }
</script>