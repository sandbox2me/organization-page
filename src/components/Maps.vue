<template>
    <a :href="getLink()" target="_blank">{{ data }}</a>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        methods: {
            getLink() {
                return 'https://yandex.ru/maps/?text=' + this.data;
            }
        }
    } 
</script>