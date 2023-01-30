const GET_USERS = 'https://community-server.onrender.com/api/users/'



 export const getUsers = async () => {

    try {
        return await fetch(GET_USERS)
        .then(res => res.json())
       
        
    } catch (err) {
        console.log(err);
    }
}

