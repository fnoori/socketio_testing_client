<template>
    <v-app>
        <v-navigation-drawer clipped
                             v-model="drawer"
                             color="grey darken-4"
                             absolute
                             bottom
                             temporary
                             dark
                             app>
            <v-list dense
                    nav
                    class="py-0">

                <v-list-item two-line :class="'px-0'">
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/women/70.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Application</v-list-item-title>
                        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app
                   clipped-left
                   flat
                   color="grey darken-4"
                   tile
                   dense>

<!--            <v-btn icon color="white">-->
<!--                <v-icon v-if="drawer" @click="drawer = true">mdi-menu-open</v-icon>-->
<!--                <v-icon v-else-if="!drawer" @click="drawer = false">mdi-menu</v-icon>-->
<!--            </v-btn>-->

<!--            <v-btn icon color="white">-->
<!--                <v-icon v-if="!drawer" @click="drawer = true">mdi-menu</v-icon>-->
<!--                <v-icon v-if="drawer" @click="drawer = false">mdi-menu-open</v-icon>-->
<!--            </v-btn>-->

            <v-btn icon color="white">
                <v-icon @click="drawer = true">mdi-menu</v-icon>
            </v-btn>

            <v-row class="justify-center mb-n6">
                <v-col cols="11" sm="8">
                    <v-text-field v-model="uri"
                                  solo
                                  label="http(s)://..."
                                  clearable
                                  dense>

                        <template v-slot:append>
                            <v-fade-transition>
                                <v-progress-circular v-if="loading"
                                                     size="20"
                                                     color="info"
                                                     indeterminate></v-progress-circular>
                            </v-fade-transition>
                        </template>

                        <template v-slot:append-outer>
                            <v-btn @click="loading = !loading" color="success" style="top: -0.8em" icon>
                                <v-icon>mdi-send</v-icon>
                            </v-btn>
                        </template>

                    </v-text-field>
                </v-col>
            </v-row>

            <connection-status/>


        </v-app-bar>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
        </v-footer>
    </v-app>
</template>

<script>
    import ConnectionStatus from "./components/ConnectionStatus";

    export default {
        components: {ConnectionStatus},
        data() {
            return {
                drawer: false,
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                    {title: 'Photos', icon: 'mdi-image'},
                    {title: 'About', icon: 'mdi-help-box'},
                ],
                background: false,
                uri: '',
                loading: false
            }
        },
        computed: {},
    }
</script>
