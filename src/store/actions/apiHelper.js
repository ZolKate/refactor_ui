
export default {
    async fetchData(ctx, { url }) {
        const res = await fetch(url);
        const answer = await res.json();
        console.log(answer)
        if(!res.ok){
            throw new Error(answer.error_text)
        }
        return answer
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