<template>
    <Fragment>
            <v-text-field  v-for="(value, name, key) in data" :key="key" :ref="key" 
                :v-model="name"
                :label="name"
                :value = "value"
                :disabled = "isActive"
                @input = "onChange($event, name)"
            >
            </v-text-field>
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
    props: {
        title: String,
        data: Object,
        isActive: Boolean
    },
    methods:
    {
        onChange($event, name){
            let obj={ [name]: $event }
            this.$emit("input", [this.title, obj])
        }
    },
    components: { Fragment }
}
</script>