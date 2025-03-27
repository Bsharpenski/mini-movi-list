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

// .then(data=> { const fileData=  data.map(` => ({
//     Id: user.id,
//     Name:user.name,
//     Email:user.email



const prompt = require('prompt-sync')({sigint: true});

var inputUser= prompt("Type your input: ");


    fetch(`https://jsonplaceholder.typicode.com/${inputUser}`)
      .then(response => response.json())
      .then(inputFile => console.log(inputFile))
      .catch(error => {
        console.error(err)});
     
     //GET:/posts/:id 


    
    // if(inputUser == "posts"){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    
      

    // }
    // console.log(fileData)
   
   
      

     



    //   const apiUrl = `https://jsonplaceholder.typicode.com/${type}`;
    // const validTypes = ['users', 'posts', 'comments', 'albums', 'photos', 'todos'];