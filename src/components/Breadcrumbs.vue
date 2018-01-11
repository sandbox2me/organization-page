<template>
    <v-breadcrumbs>
        <v-icon slot="divider">chevron_right</v-icon>
        <v-breadcrumbs-item href="/">
            <v-icon color="blue">
                home
            </v-icon>
        </v-breadcrumbs-item>
        <v-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled" :href="item.href">
            {{ item.text }}
        </v-breadcrumbs-item>
    </v-breadcrumbs>
</template>

<script>
  import { router } from '../router/router';

  export default {
    data() {
        return {
            items: []
        }
    },
    methods: {
        getBreadcrumbsItems() {
            let breadcrumbs = router.history.current.matched;

            this.items = [];

            breadcrumbs.forEach((item, index) => {
                this.items.push({
                    text: item.meta.name,
                    href: item.path
                });
            })
        }
    },
    watch: {
        '$route': function() {
            this.getBreadcrumbsItems();
        }
    }
  };

</script>