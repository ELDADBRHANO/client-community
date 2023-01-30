const getCommunitiesApi = 'https://community-server.onrender.com/products/getProducts'
const postCommunitiesApi = 'https://community-server.onrender.com/products/getProducts'

export const getCommunities = async () => {

    try {
        return await fetch(getCommunitiesApi)
        .then(res => res.json())
        // .then(result = console.log(result))
        
    } catch (err) {
        console.log(err);
    }
}


async function postCommunities(data) {

    await fetch(postCommunitiesApi, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
     })
         .then(response => {
             console.log('success community add ');
             return response.json(data)
         })
         .then(values => {
             console.log(values, 'error community not add')
         })
 
 }
 export default postCommunities;