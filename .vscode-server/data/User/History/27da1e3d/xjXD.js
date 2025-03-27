//If using the fetch() method produces an error, it is likely 
    
//that you are running an older version of Node.js and need to implement
//the following import:
//const fetch = require('node-fetch');  

//Arguments passed into a node command can be found in the process.argv array
//The 0 index in the array is where your Node installation is stored
//The 1 index in the array is where the file you ran Node on is stored
//The 2 index in the array is the first argument you pass to the Node command after the file name
//See documentation here - https://nodejs.org/docs/latest/api/process.html#process_process_argv

// console.log(process.argv[2]);
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(file=> JSON.parse())
    //   .then(json => console.log(json))
        // const obj = JSON.parse(response);
      .then(data => {
        // Output specific fields
        console.log(data.name);
       
      })


//       const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // Expected output: 42

// console.log(obj.result);
// // Expected output: true
