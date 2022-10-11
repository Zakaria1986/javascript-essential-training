/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


// Zaks edits

// Building an list of arrays
const myArr = ['Name', 'age', 'London', 'UK', 'education', 'level of ducation']; 

// Getting obody DOM Array
const body = document.querySelector('body'); 

// Create element in the body tag
const h1 = document.createElement('h1'); 

//Write html on the page
h1.innerHTML = myArr.map(item =>  item);
body.append(h1);

// removing the last item 
myArr.pop(); 


// Adding an item to the list at the end of the array
myArr[myArr.length] = ' list 1'.trim(); 
console.log(myArr); 

// Add the last item as the first item on the array 
const lastItem = myArr.pop(); 

 

// adding to beggining of the list 
myArr.unshift(lastItem); 
myArr.unshift(myArr.pop()); 

// Out put the DOM instead of consoling
h1.innerHTML = myArr.map(item =>  item);
body.append(h1);

//Sort the items by alphabetical order

const h2 = document.createElement('p');
let newArr = []; 
myArr.forEach(item =>newArr.push(item.toLowerCase()));
h2.innerHTML = 'New Array list with lowercase for sorting order properly:<h1> ' + newArr.sort()+'<h/1>'; 
body.append(h2); 

// Use the find() method to find a specific item in the array
const pTag = document.createElement('h2'); 
pTag.innerHTML = newArr.find(item => item.trim() == ' list 1'.trim());

body.append(pTag); 

// Remove the item you found using the find method from the array.
const h2Tag = document.createElement('h2'); 
  let remove = 'list 1'; 
        newArr.splice(newArr.indexOf(remove), 1); 
h2Tag.innerText = 'List 1 is now remove and here is the new array:[] '+newArr; 
body.append(h2Tag); 

