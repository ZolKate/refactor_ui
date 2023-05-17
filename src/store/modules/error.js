export default{
    actions: {
        async setError(ctx, err){
            await ctx.commit("postError", err);
            await ctx.dispatch("showToast", {
                message: err,
                color: 'red',
                timeout: 3000
            })
            await ctx.commit("deleteError")
        },
    },
    mutations: {
        postError(state, error){
            state.errors.push({id: Math.random().toString(16).slice(2), message: error.message});
        },
        deleteError(state){
            if(state.errors != undefined)
                state.errors.shift()
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