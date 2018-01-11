<template>
    <div>
        <v-layout row wrap v-if="items">
            <v-flex v-for="(item, key, index) in items" :key="key" v-if="itemsLimit > index" xs6 sm3>
                <v-card>
                    <v-card-media :src="require( '../assets/img/content/' + item.images[0] )" height="165">
                        <v-layout column align-center justify-center>
                            <div class="white--text text-xs-center title">
                                {{ item.title }}
                            </div>
                        </v-layout>
                    </v-card-media>
                    <v-card-title primary-title>
                        <div class="card-text grey--text" v-html="item.text"></div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="goToInfoPage(key)">
                            Подробнее
                        </v-btn>
                    </v-card-actions>
                </v-card>        
            </v-flex>
        </v-layout>

        <div class="text-xs-center more-btn" v-if="more && visibleItems < Object.keys(items).length">
            <v-btn color="success" @click.native="increaseLimit()" :loading="loading" :disabled="loading">
                Загрузить еще
                <v-icon right dark>cloud_download</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: [
            'items',
            'limit',
            'link',
            'more'
        ],
        data() {
            return {
                itemsLimit: this.limit ? this.limit : this.more,
                visibleItems: this.more,
                loader: null,
                loading: false
            }
        },
        methods: {
            goToInfoPage(id) {
                this.$router.push({
                    name   : this.link,
                    params : {
                        id : id
                    }
                });
            },
            increaseLimit() {
                this.loader = 'loading';

                setTimeout(() => {
                    this.visibleItems += this.more;
                    this.itemsLimit += this.more;
                }, 600);
            }
        },
        watch: {
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => {
                    this[l] = false
                }, 600);

                this.loader = null
            }
        }
    } 
</script>

<style lang="stylus" scoped>
    .more-btn {
        margin-top 30px
    }
    
    .card-text {
        overflow hidden;
        line-height 20px;
        height 65px;
        text-overflow ellipsis;
        display -webkit-box;
        -webkit-line-clamp 3;
        -webkit-box-orient vertical;
    }

    p,
    .card-text {
        user-select none;
    }
</style>