const CREATE_POST = 'http://localhost:8080/api/posts/create'
const GET_POST = 'http://localhost:8080/api/posts'

async function createPost(user) {

    await fetch(CREATE_POST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log('success post add  ');
            return response.json(user)
        })
        .then(values => {
            console.log(values, 'error post add not')
        })

}
export default createPost;

export const getPost = async () => {

    try {
        return await fetch(GET_POST)
            .then(res => res.json())
        // .then(result = console.log(result))

    } catch (err) {
        console.log(err);
    }
}
