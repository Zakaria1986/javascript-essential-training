/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// Target specific element nested inside other elements 
// Try advanced CSS query to get specific targets 
// Experience with querySelector and querySelectAll 


// making background colour red 
const bgcolour = document.body; 
bgcolour.style.backgroundColor = '#ffe6e6'; 


// title.style.backgroundColor = 'Can you see me'; 

let title  = document.querySelector("h1.backpack__name"); 
title.style.color = "#660000";



let bg = document.querySelector('.backpack__name');
bg.style.backgroundColor = '#e4e6e7';

// target the li list and change the colours
let li = document.querySelectorAll('ul li');
 li.forEach(item => item.style.color = '#006894');

// update buttons
let bt =  document.querySelectorAll("button"); 
    bt.forEach(item=> {item.style.backgroundColor = 'red';  item.style.fontSize = "12px";})
   

// select just one li element feature backpack__lid and seeting to red; 
let lidst = document.querySelector('.backpack__lid');
    lidst.style.fontFamily = "sans-serif";
    lidst.style.fontSize = "30px";
    lidst.style.backgroundColor = "grey"; 
    
    
   