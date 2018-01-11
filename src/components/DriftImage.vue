<template>
    <img :src="src" :data-zoom="src">
</template>

<script>
    import Drift from 'drift-zoom';

    export default {
        props: [
            'src'
        ],
        mounted() {
            let image = this.$el;

            new Drift(image, {
                inlinePane: true,
                containInline: false,
                zoomFactor: 3.5
            });
        }
    }
</script>

<style>
    @import 'drift-zoom/src/css/drift-basic.css';

    .drift-zoom-pane.drift-inline {
        width: 230px;
        height: 230px;
        border-radius: 115px;
    }
</style>

<style lang="stylus" scoped>
    img {
        width 100%;
    }
</style>