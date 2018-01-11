<template>
    <v-parallax v-if="data.image" :src="require( '../assets/img/content/' + data.image )" :height="data.height">
        <v-layout column align-center justify-center>
            <div class="text-xs-center" :style="{ color: data.textColor }">
                <div class="display-2" v-if="data.text">
                    {{ data.text }}
                </div>
                <div class="display-1" v-if="data.subText">
                    {{ data.subText }}
                </div>
                <div class="title" v-if="data.title">
                    {{ data.title }}
                </div>
            </div>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        props: [
            'data'
        ]
    }
</script>

<style lang="stylus" scoped>
    .title {
        font-size 17px !important;
    }
</style>
