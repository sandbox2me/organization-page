<template>
    <div>
        <yandex-map class="yandex-map"  :coords="label"  :zoom="zoom"  :style="{ 'height': height + 'px' }" >
            <ymap-marker 
                :marker-type="markerType"
                :coords="label"
                :icon="icon">
            </ymap-marker>
        </yandex-map>
    </div>
</template>

<script>
    export default {
        props: [
            'label',
            'height',
            'zoom'
        ],
        data() {
            return {
                markerType: 'Placemark',
                icon: { color: 'blue', glyph: 'home' }
            }
        },
    } 
</script>

<style lang="stylus">
    .yandex-map {
        width 100%;
    }

    .ymap-body {
        width calc(100% - 16px);
        margin-left 8px;
        margin-right 8px;
        height inherit;
        overflow hidden;
    }

    .yandex-map [class^="ymaps-"][class$="-controls__toolbar"],
    .yandex-map [class^="ymaps-"][class$="-controls__bottom"],
    .yandex-map [class^="ymaps-"][class$="-copyrights-pane"],
    .yandex-map [class^="ymaps-"][class$="-map-copyrights-promo"] {
        display: none;
    }

    .yandex-map [class^="ymaps-"][class$="-zoom"] {
        transform translateX(-5px) translateY(-100px);
    }

</style>
