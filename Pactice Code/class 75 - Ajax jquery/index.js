// Ajax jquery
// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// add jquery libraray cdn
// ajax - asynchronous javascript and xml


console.clear();

const makeRequest = async (url, method) => {
    try{
        const result = await $.ajax({
            url: url,
            method: method
        });
        return result;
    }catch(err){
        console.log(`Error: ${err}`);
    }
}


// get Data - get method
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then((res) => console.log(res))
}
getData();



// send data - post method
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST',{
        id: 1,
        userName: 'Sozib',
        title: 'Post 1',
        body: 'This is post 1'
    })
    .then((res) => console.log(res))
}
sendData();





// update Data - PUT method
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT',{
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    .then((res) => console.log(res))
}
updateData();




// delete data - delete method
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
    .then((res) => console.log(res))
}

deleteData();