<template>
    <Loading v-if="loading" text="Загружаем заказы..."/>
    <v-container fluid v-else>
        <v-card>
            <h2>Активные заказы</h2>
            <v-row dense>
                <v-col v-for="(order, index) in orders.orders" :key = "order.guid" >
                    <OrderCard :order = "order" :count = "index+1" />
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderCard from './OrderCard.vue';
import Loading from '../../views/Loading.vue';

export default {
    data: ()=>({
      loading: true
    }),
    computed: mapGetters({ orders: "activeOrders", error: "getErrors"}),
    methods: mapActions(["fetchOrders"]),
    async mounted() {
        await this.fetchOrders();
        this.loading = false;
    },
    components: { OrderCard, Loading }
}
</script>