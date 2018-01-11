<template>
    <p>{{ getStr() }}</p>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        
        methods: {
            getStr() {
                let result = '';

                if (this.data.timeFrom) {
                    result += 'С: ' + this.data.timeFrom + ' ';
                }

                if (this.data.timeTill) {
                    result += 'до: ' + this.data.timeTill + ' ';
                }

                return result;
            }
        }
    } 
</script>