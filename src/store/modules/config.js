export default{
    actions: {
        async fetchConfig(ctx){
            try{
                let config = await ctx.dispatch("fetchData", { url: "http://127.0.0.1:8000/config" })
                ctx.commit('updateConfig', config);
            }catch(err){
                await ctx.dispatch("setError", err.message)
            }
        },

        async changeConfig(ctx){
            const config = ctx.getters.getConfig
            await ctx.dispatch("postData", {url:"http://127.0.0.1:8000/config", data: config})
        }

    },
    mutations:{
        updateConfig(state, config){
            state.config = config;
        },
        updateRk7(state, rk7){
            Object.assign(state.config.rk7, rk7) 
        },
        updateLog(state, log){
            Object.assign(state.config.log, log) 
        },
        updateServer(state, server){
            Object.assign(state.config.server, server) 
        }
    },
    state: {
        config: {}
    },
    getters: {
        getConfig(state){
            return state.config
        }
    }
}