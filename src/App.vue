<template>
    <v-app :dark="organizationInfo.app ? organizationInfo.app.dark : false ">
        <app-left-menu></app-left-menu>
        <app-top-menu></app-top-menu>
        <template v-if="organizationInfo.parallax && organizationInfo.parallax.enabled">
            <app-parallax :data="organizationInfo.parallax"></app-parallax>
        </template>
        <app-content></app-content>
    </v-app>
</template>

<script>
  import appLeftMenu from './components/LeftMenu.vue';
  import appTopMenu from './components/TopMenu.vue';
  import appParallax from './components/Parallax.vue';
  import appContent from './components/ContentWrap.vue';

  import { mapGetters } from 'vuex';

  export default {
      computed: {
          ...mapGetters([
            'organizationInfo'
          ])
      },
      components: {
          appTopMenu,
          appLeftMenu,
          appParallax,
          appContent
      }
  } 
</script>

<style lang="stylus">
    @import './assets/styles/index.styl';
</style>

<style lang="stylus" scoped>
    .parallax {
        margin-top 65px;
    }

    * :not(input),
    * :not(textarea), {
        user-select none;
    }
</style>
