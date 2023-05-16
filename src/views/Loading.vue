<template>
    <v-container fluid fill-height class="align-content-center">
        <v-row justify="center">
            <Loader :size="200"/>
        </v-row>
        <v-row justify="center" class="py-6">
          <h2>{{text}}</h2> 
        </v-row>
    </v-container>
</template>

<script>
import Loader from '../components/UI/Loader.vue';
export default{
    props: ["text"],
    components: { Loader }
}
</script>