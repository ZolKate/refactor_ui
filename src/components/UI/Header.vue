<template>
    <fragment>

        <v-app-bar
            color="green"
            app
        >
            <v-app-bar-nav-icon  @click="drawer = true"></v-app-bar-nav-icon>
            <v-app-bar-title>RK7 Orders</v-app-bar-title>
            <v-spacer></v-spacer>
            <span>
                {{expire_date}}
            </span>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list
                nav
            >
                <v-list-item-group
                    v-model="group"
                    active-class="green--text text--accent-4"
                >
                    <v-list-item 
                        v-for="item, index in menu" 
                        :key="index"
                        :to="item.url"
                        :disabled="item.active"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ item.name }}
                        </v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        
    </fragment>
</template>

<script>
import {mapGetters} from "vuex"
export default{
    data: () => ({
        drawer: false,
        group: null,
        expire_date: "12.12.2023",
    }),
    computed: {
        ...mapGetters[{isActive:"getFeatureOne"}],
        
        menu(){
            return [
                {
                    name: "Открытые заказы",
                    url: "/orders",
                    icon: "mdi-clipboard-list-outline",
                    active: false
                },
                {
                    name: "Настройки",
                    url: "/config",
                    icon: "mdi-cog",
                    active: this.isActive
                },
            ]
        }
    },
}
</script>