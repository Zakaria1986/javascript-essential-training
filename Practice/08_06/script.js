/**
 * 
 * different types of function:
 *  Function declaration
 *  variable expression function 
 *  arrow function
 *  self call fuction
 * 
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Zaks edits 
// Create two functions. Basic function declaration 
// In the body of the element function declaration do something in the body of the of DOM
// This could be anytning exmaple, finding a class or tag appending

const main = document.querySelector('main'); 
function myFirstFunc(){
    const div = document.createElement('div'); 
          div.classList.add('class','divClass');
          div.style.color ='skyblue';
          div.innerHTML='<h1>This sentence is inserted in the fucntion body</h1>'
       main.append(div);    
}
// Call this function declaration so the action takes place and then check it in the browser
myFirstFunc();

// Create basic function expression, thats were you create a variable and assign an annomouse function insite
//  Do the same above: call an element, make changes to it 
// call the function and make sur             e it works

let variableFunc = function(){
    const div = document.createElement('div'); 
          div.classList.add('class','divClass');
          div.style.color ='skyblue';
          
          let h1 = document.createElement('h2');
          h1.innerHTML ='This is an exmpale of variable function';
          div.append(h1); 
          main.append(div);    
}
variableFunc(); 

// Finally create an arrow fucntion and then call it. 

let arrowFun = ()=>{
    const div = document.createElement('div'); 
          div.classList.add('class','divClass');
          div.style.color ='skyblue';
          
          let h1 = document.createElement('h2');
          h1.innerHTML ='This is an exmpale of arrow function';
          div.append(h1); 
          main.append(div);    
}; 

arrowFun(); 

(function (){
    const div = document.createElement('div'); 
          div.classList.add('class','divClass');
          div.style.color ='skyblue';
          
          let h1 = document.createElement('h2');
          h1.innerHTML ='This is Immidiate self function';
          div.append(h1); 
          main.append(div);    
})(); 