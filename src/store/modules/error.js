export default{
    actions: {
        async setError(ctx, err){
            ctx.commit("postError", err);
            await ctx.dispatch("showToast", {
                message: err.message,
                color: 'red',
                timeout: 3000
            })
        },
    },
    mutations: {
        postError(state, error){
            state.errors.push({id: Math.random().toString(16).slice(2), message: error.message});
        },
        deleteError(state, id){
            let idx = state.errors.findIndex(item => item.id == id);
            state.errors.splice(idx, 1);
        }
    },
    state: {
        errors: []
    },
    getters: {
        getErrors(state){
            return state.errors;
        }
    }
}