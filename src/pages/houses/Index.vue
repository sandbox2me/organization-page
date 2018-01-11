<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

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