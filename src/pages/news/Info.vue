<template>
    <v-content>
        <v-container fluid grid-list-md>
            <v-layout row v-if="newsList[newsId]">
                <v-flex xs4>
                    <app-parallax v-if="newsList[newsId].images.length === 1" :data="{ image: newsList[newsId].images[0], height: 250 }"></app-parallax>
                    <v-carousel hide-delimiters lazy v-if="newsList[newsId].images.length > 1">
                        <v-carousel-item 
                            v-for="(item, index) in newsList[newsId].images" 
                            :key="'houseView' + index"
                            :src="require( '../../assets/img/content/' + item )"
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
                <v-flex xs8>
                    <div class="news-title display-1">{{ newsList[newsId].title }}</div>
                    <div class="news-text" v-html="newsList[newsId].text"></div>
                    <div class="news-date">{{ newsList[newsId].date | date }}</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import { mapGetters } from 'vuex';

    import appParallax from '../../components/Parallax.vue';

    export default {
        computed: {
            ...mapGetters([
                'newsList'
            ])
        },
        data() {
            return {
                newsId: this.$route.params.id
            }
        },
        methods: {
            checkNewsAvailability() {
                if (! (this.newsId in this.newsList)) {
                    this.$router.push({
                        name : 'news-list'
                    });
                }
            }
        },
        components: {
            appParallax
        },
        watch: {
            'newsList': function() {
                this.checkNewsAvailability();
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .news-title {
        padding 10px 40px 20px 40px
    }
    
    .news-text {
        padding 0 40px
    }
    
    .news-date {
        padding-top 20px;
        text-align right;
        color gray;
    }

    .parallax {
        border-radius 3px;
    }

    .carousel {
        height 250px;    
    }
</style>