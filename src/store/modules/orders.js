export default{
    actions: {
        async fetchOrders(ctx){
            try{
                let orders = await ctx.dispatch("fetchData", { url: "http://127.0.0.1:8000/order_list" })
                ctx.commit('updateOrders', orders);
            }catch(err){
                await ctx.dispatch("setError", err)
            }
        }
    },
    mutations:{
        updateOrders(state, orders){
            state.orders = orders;
        }
    },
    state: {
        orders: []
    },
    getters: {
        activeOrders(state){
            return state.orders;
        },
        getErrorOrders(state){
            return state.error
        }
    }
}