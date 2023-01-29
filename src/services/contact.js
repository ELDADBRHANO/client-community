const CONTACT_POST =' http://localhost:8080/api/contact/contact'
async function contact(data) {
console.log(data);
  await fetch(CONTACT_POST, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
   })
       .then(response => {
           console.log('success contact add ');
           return response.json(data)
       })
       .catch(error=>console.log(error))

}
export default contact;