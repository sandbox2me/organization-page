<template>
    <v-list-tile v-model="isActive" ripple @click.stop="goTolinkDestination()">
        <v-list-tile-action v-if="data.meta.icon">
            <v-icon>
                {{ data.meta.icon }}
            </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                {{ data.meta.name }}
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    import { router } from '../router/router';

    export default {
        props: [
            'data'
        ],
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            goTolinkDestination() {
                this.$router.push({
                    name: this.data.name
                });
            },
            setActiveMenuItem() {
                let matches = router.history.current.matched;
                let result = false;

                matches.forEach(item => {
                    if (item.name === this.data.name) {
                       result = true;
                    }
                });

                this.isActive = result;
            },
        },
        watch: {
            '$route': function() {
                this.setActiveMenuItem();
            }
        }
    }
</script>
