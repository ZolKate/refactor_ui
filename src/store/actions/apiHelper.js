
export default {
    async fetchData(ctx, { url }) {
        try{
            const res = await fetch(url);
            const answer = await res.json();
            if(!res.ok){
                throw new Error(answer.error_text)
            }
            return answer
        }catch(err){
            throw new Error(err.message)
        }
    },

    async postData(ctx, { url, data }){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( data )
        };
        const res = await fetch(url, requestOptions);
        return res
    }
}