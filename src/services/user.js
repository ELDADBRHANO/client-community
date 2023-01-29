const GET_USERS = 'http://localhost:8080/api/users/'



 export const getUsers = async () => {

    try {
        return await fetch(GET_USERS)
        .then(res => res.json())
       
        
    } catch (err) {
        console.log(err);
    }
}

