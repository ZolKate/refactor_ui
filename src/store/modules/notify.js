export default{
    actions:{
        async showToast(ctx, payload){
           await ctx.commit("updateNotify", payload)
        },

        async clearToast(ctx, payload){
            await ctx.commit("clearNotify", payload)
        }
    },
    mutations:{
        updateNotify(state, payload){
            state.notifies.push(
                {
                    id: Math.random().toString(16).slice(2), 
                    message: payload.message,
                    color: payload.color,
                    timeout: payload.timeout
                }
            )
        },

        clearNotify(state, id){
            let idx = state.notifies.findIndex(item => item.id == id);
            state.notifies.splice(idx, 1);
        },
    },
    state:{
        notifies: []
    },
    getters:{
        getNotifies(state){
            return state.notifies
        }
    }
}