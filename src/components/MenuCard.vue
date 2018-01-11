<template>
  <v-card ripple v-if="organizationInfo.logo && organizationInfo.logo.enabled">
    <v-card-media :src="require( '../assets/img/content/' + organizationInfo.logo.image )" :height="organizationInfo.logo.height + 'px'">
      <v-layout column class="media" :style="{ color: organizationInfo.logo.textColor }">
        <v-spacer></v-spacer>
        <div class="card-name">
          {{ organizationInfo.logo.text }}
        </div>
      </v-layout>
    </v-card-media>
  </v-card>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'organizationInfo'
            ])
        }
    }
</script>

<style lang="stylus" scoped>
    .card {
        border-radius: 0;
        margin-top: -3px;    
    }
    .card-name {
      text-align right;
      font-size 21px;
      padding 20px 25px;
      user-select none;
    }
</style>