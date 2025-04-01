/*
URL Placeholder Challenge:

You have been given a list of URLs that you need to fetch using Fetch API and display the content of the response using AJAX call.
Your task is to write a function that accepts an array of URLs and fetches their content using Fetch API and displays the content using AJAX calls.

Function signature:
function fetchAndDisplay(urls: string[]) {
    // your code here
}
Requirements:

The function should accept an array of URLs as input.
The function should fetch the content of each URL using Fetch API.
The function should display the content of the response using AJAX calls.
If there is any error while fetching the URL, it should display an error message.

Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchAndDisplay(urls);
Output:
Title: delectus aut autem   q
Completed: false

Title: quis ut nam facilis et officia qui
Completed: false

Title: fuga est inventore molestiae minus laboriosam repellendus
Completed: false

Note:
The above example uses JSONPlaceholder API to fetch the content. You can use any other API of your choice.


*/


async function fetchAndDisplayData(urls)
// takes the json placeholder urls as a parameter

{

    try{
        /*
        loop through the urls array and takes each url and 
        fetch for the resource 
        */

        for(let i = 0; i < urls.length; i++){
        const response = await fetch(urls[i])

        if(!response.ok)
        // checks to see if the response is ok    
        {
            throw new Error("Server Error: Could not fetch resource")
        }
        else{
        const data = await response.json();
        console.log(data)
        }
        }
    }
    catch(error){
        console.log(error);
    }
}

fetchAndDisplayData([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
])

// prints ->
/*
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
{userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
{userId: 1, id: 3, title: 'fugiat veniam minus', completed: false} 

*/

// Get titles function 

async function getTitles(urls){
    try{
        for(let i = 0; i < urls.length; i++){
        const response = await fetch(urls[i])

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
    
        const data = await response.json();
        p.append(`${data.title}, `) // append the title to our p tag 
        }
    }
    catch(error){
        console.log(error);
    }

}

let p = document.createElement("p") // create a new p tag
p.textContent = "Titles: "
document.body.appendChild(p) // append the p tag to our html document
getTitles([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]) // this appends all our titles properties in our urls and append to the our p tag in our html

/*
displays on the page 

Titles: delectus aut autem, quis ut nam facilis et officia qui, fugiat veniam minus,

*/