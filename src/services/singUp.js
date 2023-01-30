const USER_SING = 'https://community-server.onrender.com/users/create'

async function userSingUp(user) {

    await fetch(USER_SING, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(user)
     })
         .then(response => {
             console.log('success user add ');
             return response.json(user)
         })
         .then(values => {
             console.log(values, 'error user not add')
         })
 
 }
 export default userSingUp;