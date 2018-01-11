<template>
    <div>
        <v-tabs v-model="ativeTab">
            <v-tabs-bar>
                <v-tabs-item
                    v-for="(tab, index) in tabs"
                    :key="'tabs' + index"
                    :href="'#' + tab.path"
                    ripple
                    @click="goToPage(tab.path)"
                >
                    {{ tab.name }}
                </v-tabs-item>
                <v-tabs-slider></v-tabs-slider>
            </v-tabs-bar>
        </v-tabs>
        <br>
        <v-divider></v-divider>
    </div>
</template>

<script>
    export default {
        props: [
            'name'
        ],
        data() {
            return {
                ativeTab: this.$route.name,
                tabs: [],
            }
        },
        methods: {
            goToPage(item) {
                this.$router.push({
                    name: item
                });
            },
            getRouterObject(arr) {
                arr.forEach(item => {                    
                    if (item.name === this.name) {
                        this.setTablist(item);
                    }

                    if (item.children) {
                        this.getRouterObject(item.children);
                    }
                });
            },
            setTablist(obj) {
                let result = [];

                obj.children.forEach(item => {                    
                    if (item.meta.usedInTabs) {
                        
                        result.push({
                            name: item.meta.title,
                            path: item.name
                        })
                    }
                });
                
                this.tabs = result;
            }
        },
        created() {
            let routes = this.$router.options.routes;
            this.getRouterObject(routes);
        }
    }
</script>
