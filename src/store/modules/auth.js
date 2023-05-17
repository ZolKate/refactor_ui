export default{
    actions:{
        async logIn(ctx, payload){
            if(payload.login === "admin" && payload.password === "admin"){
                await ctx.commit("setUser", payload)
            }else
            {
                await ctx.dispatch("setError", new Error("Логин или пароль неверны"))
            }
        }
    },
    mutations:{
        setUser(state, payload){
            state.user = payload
        }
    },
    state:{
        user:{}
    },
    getters:{
        getUser(state){
            return state.user
        }
    }
}