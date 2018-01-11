<template>
    <v-card>
        
        <v-card-media :src="require( '../assets/img/content/' + data.image )" height="300px">
            <v-layout column class="media">
                <v-spacer></v-spacer>
                <v-card-title class="white--text pl-2 pt-2">
                    <div class="headline pl-2 pt-2">
                        {{ data.name }}
                    </div>
                    <div class="subheading pl-2 pt-2">
                        {{ data.position }}
                    </div>
                </v-card-title>
            </v-layout>
        </v-card-media>
        
        <v-list two-line>
            <v-subheader>Контакты</v-subheader>
            <app-list-item
                v-for="(phone, index) in data.contacts.phones" 
                :key="'phone' + index"
                :icon="index === 0 ? phoneIcon(phone.type) : false" 
                :title="phone" 
                :component="'telephone'" 
                :text="infoType(phone.type)"
            ></app-list-item>
            <v-divider inset></v-divider>
            <app-list-item 
                v-for="(mail, index) in data.contacts.email" 
                :key="'mail' + index"
                :icon="index === 0 ? 'email' : false"
                :title="mail.mail" 
                :component="'email'" 
                :text="infoType(mail.type)"
            ></app-list-item>
            <template v-if="data.workTime">
                <v-divider></v-divider>
                <v-subheader>Часы приема</v-subheader>
                <app-list-item 
                    v-for="(access, index) in data.workTime" 
                    :key="'workTime' + index"
                    :icon="index === 0 ? 'access_time' : false"
                    :title="access.day"  
                    :text="access"
                    :subComponent="'workTime'"
                ></app-list-item>                
            </template>
        </v-list>
    </v-card>
</template>

<script>
    import { mapFilters } from '../system/filtersAccess';

    import appListItem from './ListItem.vue';
    
    export default {
        props: [
            'data'
        ],
        methods: {
            ...mapFilters([
                'phoneIcon',
                'infoType',
                'phoneMask'
            ])
        },
        components: {
            appListItem,
        }
    } 
</script>

<style lang="stylus" scoped>
    .container {
        padding-top 15px;
        padding-bottom 15px;
    }
</style>
