// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/vue/react/angular), node.js


// + very easy to use
// + it supports all modern browser including IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent


// axios(config)
// axios(url, [, config])
// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config





console.clear();

// axios get
axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res.data))
    // .then((res) => console.log(res.config))
    // .then((res) => console.log(res.headers))
    // .then((res) => console.log(res.status))
    // .then((res) => console.log(res.statusText))
    .catch((err) => console.log(err))
    


// axios post
axios
    .post('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify({
            id: 102,
            userName: 'Rana Hossain',
            title: 'Post 1',
            body: 'This is post 1'
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))



// axios put
axios
    .put('https://jsonplaceholder.typicode.com/posts/3', {
        body: JSON.stringify({
            id: 105,
            userName: 'Rana Hossain',
            title: 'Post 1',
            body: 'This is post 3'
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))



// axios patch
axios
    .patch('https://jsonplaceholder.typicode.com/posts/4', {
        body: JSON.stringify({
            body: 'This is post 7'
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))




// axios delete
axios
    .delete('https://jsonplaceholder.typicode.com/posts/4')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))





// makeRequest - getData
const makeRequest = async (config) => {
    return await axios(config);
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
   .then((resp) => console.log(resp))
   .catch((error) => console.log(error))
}
getData();




// makeRequest - sendData
const sendData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: JSON.stringify({
            id: 1,
            userName: 'Rakib',
            title: 'Post NO 2',
            body: 'This is post 2'
        })
    })
    .then((res) => console.log(res))
}
sendData()





// makeRequest - updateData
const updateData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/9',
        method: 'put',
        data: JSON.stringify({
            id: 1,
            userName: 'Kobir',
            title: 'Post NO 2',
            body: 'This is post 2'
        })
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}
updateData();





// makeRequest - DeleteData
const deleteData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/9',
        method: 'delete'
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}
deleteData();