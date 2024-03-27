// Best practices

// use camelCase for naming
    // Example :
        // variable name : firstName, lastName, functionName etc.


// variable declaration on top and initialize
    // Example :
        // let firstName = 'John';
        // lastName = 'Doe';

    // Example 2 :
        // let firstName, lastName, userInfo, userEmail;
        // firstName = 'John';
        // lastName = 'Doe';
        //  userInfo = {age:30};
        //  userEmail = 'john@doe.com';


// avoid unnecessary variables declaration
    // Example :
        // No declaration extra variables
        // console.log(firstName + lastName);
    
    // =====HTMl code button=====
    // <button class="btn">Click Me</button>

    // Example 2: No use this code
        // const button = document.querySelector(".btn");
        // button.addEventListener("click", function(e){
        //     console.log("Checked");
        // });

    // Use this code Example 3 or Example 4

    // Example 3: Use this code
        // const button = document.querySelector(".btn");
        // button.onclick = function(e){
        //     console.log("Checked");
        // };

    // Example 4: Use this code
        // document.querySelector(".btn").addEventListener("click", () => {
        //     console.log("Checked");
        // });


// switch, case, default
    // must use the default statement


// object and array with const
    // Example:
        // no use let and var
        // use const
        // const names = [ 'foo', 'bar' ];


// == vs ===
    // Example:
        // == : check value equals or not equals
        // === : check value equals or not equals and data type equals or not equals

    // Example 2: == check only value
        // 2 == 2
            // Ans: true
        // 2 == "2"
            // Ans: true
    
    // Example 3: === check data type and value
        // 2 === 2
            // Ans: true
        // 2 === "2"
            // Ans: false


// access dom less
    // 1. less access
    // 2. Do not access repeatedly to DOM

    // ====HTML Code ol li=====
    //  <ol class="sl_number">
    //      <li class="sl_li">First</li>
    //      <li>Second</li>
    //      <li>Three</li>
    // </ol>

    // Example: Do not access repeatedly to DOM
        // const olName = document.querySelector(".sl_number");
        // const liName = document.querySelector(".sl_li");
        // console.log(liName);
    
    // Example 2: less access to DOM
        // const olName = document.querySelector(".sl_number");
        // const liName = olName.children[0];
        // console.log(liName);

