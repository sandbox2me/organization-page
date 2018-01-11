<template>
    <a :href="link">{{ data }}</a>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        data() {
            return {
                link: 'mailto:' + this.data
            }
        }
    } 
</script>