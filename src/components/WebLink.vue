<template>
    <a :href="getLink()" target="_blank">{{ getName() }}</a>
</template>

<script>
    export default {
        props: [
            'data'
        ],
        methods: {
            getName() {
                let name = this.data.text;
                
                if (this.data.text.indexOf('://') > -1) {
                    name = this.data.text.split('://')[1];
                }
                
                return name;
            },
            getLink() {
                let link = 'http://' + this.data.link;

                if (this.data.link.indexOf('://') > -1) {
                    link = this.data.link;
                }

                return link;
            }
        }
    } 
</script>