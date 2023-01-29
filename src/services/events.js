const EventsCreate = 'http://localhost:8000/api/users/userRegester'
const EventsGet = 'http://localhost:8000/api/users/userRegester'

async function createEvents(data) {

    await fetch(EventsCreate, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log('success post add  ');
            return response.json(data)
        })
        .then(values => {
            console.log(values, 'error post add not')
        })

}
export default createEvents;

export const getEvents = async () => {

    try {
        return await fetch(EventsGet)
            .then(res => res.json())
        // .then(result = console.log(result))

    } catch (err) {
        console.log(err);
    }
}
