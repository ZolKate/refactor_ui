<template>
    <fragment>
        <Header />
        <v-main>
            <v-card style="height: 100%;">
                <router-view/>
            </v-card>
        </v-main>
    </fragment>
</template>

<script>
import Header from '../components/UI/Header.vue';
export default{
    components: { Header }
}
</script>