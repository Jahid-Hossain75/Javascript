// Web storage API - allows us to store $ read data in browser
// Web storage API - localStorage, sessionStorage
// localStorage - store, read, update and remove data
// no expiry data: data never gets lost even if you close the browser


//======================== Local Storage - Code =====================

// setItem(key, value)
// localStorage.setItem("UserName", "Jahid Hossain");
// localStorage.setItem("Password", "123456");

//  getItem(key)
// const userName = localStorage.getItem("UserName");
// const password = localStorage.getItem("Password");
// console.log(userName);
// console.log(password);



// Update (value)
// localStorage.setItem("UserName", "Rakib Hassan");



//  removeItem(key)
// localStorage.removeItem("UserName");
// localStorage.removeItem("Password");



// arry set to localStorage
// const country = ['Bangladesh', 'USA', 'United States', 'India'];
// localStorage.setItem("Countrys", JSON.stringify(country));

// const countryList = JSON.parse(localStorage.getItem("Countrys"));
// console.log(countryList);


localStorage.clear();
