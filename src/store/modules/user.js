export default{
    actions: {
        async fetchLicense(ctx){
            try{
                let license = await ctx.dispatch("fetchData", { url: "http://127.0.0.1:8000/license" })
                ctx.commit('updateLicense', license);
                
            }catch(err){
                await ctx.dispatch("setError", err.message)
            }
        }
    },
    mutations:{
        updateLicense(state, license){
            console.log(license)
            state.license = license;
        }
    },
    state: {
        license: {},
    },
    getters: {
        getLicenseValid(state){
            return state.license.valid;
        },
        getFeatureOne(state){
            return state.license.features.some(item => item.id === 1);
        },
        getFeatureTwo(state){
            return state.license.features.some(item => item.id === 2);
        },
        getExpireDate(state){
            return state.license.expire_date;
        }
    }
}