const LOG_IN = 'http://localhost:8080/api/users/signIn'


async function userLogin(user) {

   return  await fetch(LOG_IN, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(user)
     })
         .then(response => {
         
            
             return response.json(user)
             
         })
         .then(values => {
            return values
        })

        
 
 }
 export default userLogin;
