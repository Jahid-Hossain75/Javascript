
// Fetch API
// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() return a promise
// - returned promise can only handle network error
// - does not support all the older browsers



console.clear();
// fetch api
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((rrr) => {
    if(!rrr.ok){
        const message = `Error: ${rrr.status}`;
        throw new Error(message);
    }
    return rrr.json()
})
.then((rrr) => console.log(rrr))
.catch((err) => console.log(err))





// fetch api - 2
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',

    headers: { 'Content-Type': 'application/json'},

    body: JSON.stringify({
        id: 103,
        userName: 'Rana Hossain',
        title: 'Post 1',
        body: 'This is post 1'
    })
})
.then((rrr) => {
    if(!rrr.ok){
        const message = `Error: ${rrr.status}`;
        throw new Error(message);
    }
    return rrr.json()
})
.then((rrr) => console.log(rrr))
.catch((err) => console.log(err))






// fetch api - 3
const makeRequest = async (url, config) => {
    const resp = await fetch(url, config);
    if(!resp.ok){
        const messages = `Error: ${resp.status}`;
        throw new Error(messages);
    }
    const data = await resp.json();
    return data;
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
}
getData();





const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        // post method
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: 103,
            userName: 'Rana Hossain',
            title: 'Post 1',
            body: 'This is post 1'
        })
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
}
sendData();





const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        // PUT method
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: 103,
            userName: 'Rana Hossain',
            title: 'Post 1',
            body: 'This is post 1'
        })
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
}
updateData();




const patchData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        // PATCH method
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: 'Post 6'
        })
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
}
patchData();




const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        // DELETE method
        method: 'DELETE'
    })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
}
deleteData();