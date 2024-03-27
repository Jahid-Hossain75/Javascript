console.clear();

//  event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest = (method, url, data) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = () => {
        let data = xhr.response;
        // convert to js object from json string
        console.log(JSON.parse(data));
    }
    // error
    xhr.onerror = () => {
        console.log('error');
    }

    xhr.send(JSON.stringify(data));
}

const getData = () => {
    // get method
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    // post method
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        id: 101,
        userName: 'Jahid Hossain',
        age: 22
    });

    // put method
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 102,
        userName: "Rana",
        age: 32
    });

    // Patch method
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/', {
        userName: "Sakib",
    });
}

// call function
getData();