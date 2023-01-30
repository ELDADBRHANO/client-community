const POST_CATEGORIES = 'https://community-server.onrender.com/categories/create'
const CATEGORIES_GET = 'https://community-server.onrender.com/categories'

 export const getCategories = async () => {
    try {
        return await fetch(CATEGORIES_GET)
        .then(res => res.json())
        // .then(res => console.log(res))
        
    } catch (err) {
        console.log(err);
    }
}


 async function postCategories(data) {

    await fetch(POST_CATEGORIES, {
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
 export default postCategories;