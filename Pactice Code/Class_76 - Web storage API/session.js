// SessionStorage
// localStorage vs sessionStorage
// 10mb vs 5mb
// permanent vs session (tab)



//======================== sessionStorage - Code =====================

// setItem(key, value)
sessionStorage.setItem("userName", "Jahid Hossain");

// getItem(key)
const userName = sessionStorage.getItem("userName");
console.log(userName);

// removeItem(key)
// const removeKey = sessionStorage.removeItem("userName");

// session clear
// sessionStorage.clear();


// create object
const users = {
    id: 101,
    name: "John",
    age: 20,
    cgpa: 3.5
}
sessionStorage.setItem("users", JSON.stringify(users));
const userInfo = JSON.parse(sessionStorage.getItem("users"));
console.log(userInfo);