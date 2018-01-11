<template>
    <v-card flat class="grey lighten-3">
        <v-layout row>
            <v-flex xs10 offset-xs1>
                <v-card class="card--flex-toolbar">
                    <v-toolbar card prominent>
                        <app-breadcrumbs></app-breadcrumbs>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-card-text>
                      <transition name="fade" mode="out-in">
                        <router-view></router-view>
                      </transition>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-card> 
</template>

<script>
  import appBreadcrumbs from './Breadcrumbs.vue';

  export default {
    components: {
      appBreadcrumbs
    }
  }
</script>

<style lang="stylus" scoped>
  .card--flex-toolbar {
    margin-top -50px;
    margin-bottom 50px;
    border-radius 5px;
  }

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