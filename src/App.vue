<template>
    <v-app>
        <v-navigation-drawer clipped
                             v-model="drawer"
                             :color="color"
                             :expand-on-hover="true"
                             :mini-variant="true"
                             absolute
                             dark
                             app>
            <v-list
                    dense
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

        <v-app-bar
                app
                clipped-left
                flat
                :color="color"
                tile
                dense>

            <v-row class="justify-center mb-n6">
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="uri"
                            solo
                            label="http(s)://..."
                            clearable
                            dense>

                        <template v-slot:append>
                            <v-fade-transition>
                                <v-progress-circular
                                        v-if="loading"
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
                drawer: true,
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                    {title: 'Photos', icon: 'mdi-image'},
                    {title: 'About', icon: 'mdi-help-box'},
                ],
                color: 'grey darken-4',
                background: false,
                uri: '',
                loading: false
            }
        },
        computed: {},
    }
</script>
