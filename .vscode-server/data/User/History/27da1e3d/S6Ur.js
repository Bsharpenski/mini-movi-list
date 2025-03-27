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
      .then(data=> { const fileData=  data.map( user => ({
        Id: user.id,
        Name:user.name,
        Email:user.email
 
      }))
      console.log(fileData)
     
      })
      

    