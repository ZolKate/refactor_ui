<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="item.timeout"
        :color = "item.color"
        class="toast"
    >
        {{ item.message }}
    </v-snackbar>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    data: () => ({
        snackbar: false,
    }),
    props: ["item"],
    methods:{
        ...mapActions(["clearToast"]),
        removeToast(){
            this.clearToast(this.item.id)
        }
    },
    mounted(){
        this.snackbar = true
    },
    watch:{
        snackbar(value){
            if(value === false){
                this.removeToast()
            }
        }
    },
}
</script>

<style lang="scss">
    .toast{
        position: static !important;
        height: auto !important;
    }
</style>