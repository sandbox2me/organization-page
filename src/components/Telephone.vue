<template>
    <span>
        <a :href="link">{{ text }}</a>
        {{ addText }}
    </span>
</template>

<script>
    import { mapFilters } from '../system/filtersAccess';

    export default {
        props: [
            'data'
        ],
        data() {
            return {
                text    : '',
                link    : '',
                addText : ''
            }
        },
        methods: {
            ...mapFilters([
                'phoneMask'
            ]),
            getNumberStr() {
                let prefix  = this.data.code ? '8' + this.data.code : '';
                let codeLng = this.data.code.length;
                let number  = prefix + this.data.number;
                let addNmr  = this.data.add ? ', доб. ' + this.data.add : '';

                this.link = 'tel:' + number;
                this.text = this.phoneMask(number, codeLng);
                this.addText = addNmr;
            }
        },
        created() {
            this.getNumberStr();
        }
    } 
</script>