<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="item.timeout"
        :color = "item.color"
    >
        {{ item.message }}
    </v-snackbar>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
    data: () => ({
        snackbar: false,
    }),
    props: ["item"],
    methods:{
        ...mapMutations(["clearNotify"]),
        removeToast(){
            this.clearNotify(this.item.id)
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