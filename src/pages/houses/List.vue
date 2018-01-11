<template>
    <v-content>
        <app-tabs :name="'houses-list'"></app-tabs>
        <v-container fluid grid-list-md>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-container>
    </v-content>
</template>

<script>
    import appTabs from '../../components/Tabs.vue';

    export default {
        components: {
            appTabs
        },
        created() {
            this.$store.dispatch('getStopedServiceHouses');
            this.$store.dispatch('getUnderServiceHouses');
        }
    }
</script>

<style lang="stylus" scoped>
    .fade-enter-active {
        animation: fade-in 0.15s forwards;
    }

    .fade-leave-active {
        animation: fade-out 0.3s forwards;
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>