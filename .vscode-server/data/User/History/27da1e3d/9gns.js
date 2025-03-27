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
function fetchData(type) {
    const validTypes = ['users', 'posts', 'comments', 'albums', 'photos', 'todos'];
  
    if (!validTypes.includes(type)) {
      console.log('Invalid data type. Please provide one of the following: users, posts, comments, albums, photos, todos.');
      return;
    }
  
    const apiUrl = `https://jsonplaceholder.typicode.com/${type}`;
  
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Show the top 10 items in a format based on the type
        displayTopTen(data, type);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to display the top 10 items from the API response
  function displayTopTen(data, type) {
    // Create a container to display the results
    const container = document.getElementById('result-container');
    container.innerHTML = ''; // Clear any previous content
  
    // Heading
    const heading = document.createElement('h2');
    heading.textContent = `Top 10 ${type.charAt(0).toUpperCase() + type.slice(1)}:`;
    container.appendChild(heading);
  
    // Limit the data to the top 10 items
    const topTenData = data.slice(0, 10);
  
    topTenData.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
  
      // Display data based on the type
      if (type === 'posts') {
        itemElement.innerHTML = `
          <h3>Post #${index + 1}</h3>
          <p><strong>Title:</strong> ${item.title}</p>
          <p><strong>Body:</strong> ${item.body}</p>
        `;
      } else if (type === 'users') {
        itemElement.innerHTML = `
          <h3>User #${index + 1}</h3>
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Email:</strong> ${item.email}</p>
          <p><strong>Phone:</strong> ${item.phone}</p>
        `;
      } else if (type === 'comments') {
        itemElement.innerHTML = `
          <h3>Comment #${index + 1}</h3>
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Email:</strong> ${item.email}</p>
          <p><strong>Body:</strong> ${item.body}</p>
        `;
      } else if (type === 'albums') {
        itemElement.innerHTML = `
          <h3>Album #${index + 1}</h3>
          <p><strong>Title:</strong> ${item.title}</p>
        `;
      } else if (type === 'photos') {
        itemElement.innerHTML = `
          <h3>Photo #${index + 1}</h3>
          <p><strong>Title:</strong> ${item.title}</p>
          <img src="${item.url}" alt="${item.title}" width="150" />
        `;
      } else if (type === 'todos') {
        itemElement.innerHTML = `
          <h3>Todo #${index + 1}</h3>
          <p><strong>Title:</strong> ${item.title}</p>
          <p><strong>Completed:</strong> ${item.completed ? 'Yes' : 'No'}</p>
        `;
      }
  
      container.appendChild(itemElement);
    });
  }
  
  // Get the argument passed in (either 'posts', 'users', etc.)
  const arg = process.argv[2]; // Assuming you're running it via Node.js command line
  
  // Fetch data if the argument is valid
  fetchData(arg);
















/*const prompt = require('prompt-sync')({sigint: true});

var inputUser= prompt("Type your input: ");
    

    fetch(`https://jsonplaceholder.typicode.com/${inputUser}`)
      .then(response => response.json())
      .then(data=>
        {if (data == {}){
        console.log(data)

      } 
      else{console.log("Error")}
    
    })
      
    //   .then(inputFile => console.log(inputFile))
      
    //   .catch(data => console.log("Error")))
     
     //GET:/posts/:id 

// https://jsonplaceholder.typicode.com/cats
    
    // if(inputUser == "posts"){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    
      

    // }
    // console.log(fileData)
   
   
    https://github.com/Bsharpenski/sdi-blended-async-scaffold.git

     



    //   const apiUrl = `https://jsonplaceholder.typicode.com/${type}`;
    // const validTypes = ['users', 'posts', 'comments', 'albums', 'photos', 'todos'];