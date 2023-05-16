<template>
    <v-card
        color="green"
        width="400"
        dark    
    >
        <v-card-title class="text-h4 justify-space-between">
            Заказ № {{ count }}
            <span class="text-h6">Создан: {{ date }}</span>
        </v-card-title>
        <v-card-subtitle class="pb-0"> 
            Стол: {{ order.table.name }}
            <br/>
            Официант: {{ order.waiter.name }}
        </v-card-subtitle>
        <v-card-actions class="justify-end"> 
            <span>К оплате: {{order.unpaid_sum}} р.</span>
        </v-card-actions>
    </v-card>
</template>

<script>
export default{
    computed:{
        date(){
            return this.order.create_time.split("T").join(" ")
        }
    },
    props: ["order", "count"]
}
</script>