/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */


// getting the first child of ul 
const doc = document; 

let firstElul = doc.querySelectorAll('ul')[0]; 
    firstElul.style.backgroundColor = 'grey';

// Debugging element attribute

const attDebug = doc.querySelector('input'); 
console.log(attDebug); 
 const attr = attDebug.attributes; 
 console.log(attr); 

 // setting two classes
 const setsGet = attDebug.setAttribute('class','inputclass 2ndClass'); 
 //const secclass = attDebug.setAttribute('class', ''); 
 console.log('setting ',  setsGet); 
 

 // consoling out the two classes
 const clsGet = attDebug.getAttribute('class'); 
 console.log('getting the above class  ' + clsGet); 

 doc.querySelector('.2ndclass').style
 
// removing the second class of two 

const revmSclass = doc.querySelectorAll('input')[0]; 
const remvClass = '2ndClass';
console.log('removing the second class ' , revmSclass.setAttribute('class', remvClass)); 
console.log('Second class removed'  + attDebug ); 


// Setting input background colours to yellow; 
const stInput = doc.querySelectorAll('input'); 
stInput.forEach(item => item.style.backgroundColor = "yellow");

