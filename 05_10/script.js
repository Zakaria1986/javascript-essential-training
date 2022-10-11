/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

/** Zaks edits  */ 

// write hmlt for the new div that nav will sit in. 

const navHTML =`
      <nav>
        <ul>
          <li><a href="#">Menu 1</a></li>
          <li><a href="#">Menu 2</a></li>
          <li><a href="#">Menu 3</a></li>
          <li><a href="#">Menu 4</a></li>
          <li><a href="#">Menu 5</a></li>
        </ul>
      </nav>
      `; 

// CSS style applied to div created bellow
const cssStyle = `
      display:block;
      clear:both;
      margin: 60px; 
      padding: 10px;
      text-align:center; 
      background-color: grey; 
`; 

// get siteheader then prepend the new elemnt for it to sit at the top 
const siteheader = document.querySelector('.siteheader'); 

// create new element/node
const addNav = document.createElement('div');
addNav.classList.add('navClass'); 
addNav.setAttribute('style', cssStyle); 
addNav.innerHTML = navHTML;
siteheader.append(addNav); 

// style the uls and li

const styleUL = document.querySelector('.navClass nav ul');
styleUL.style.listStyleType = 'none'
styleUL.style.padding ='10px';
styleUL.style.display ='inline'; 

// making li sit horrizontally
const styleLi = document.querySelectorAll('.navClass nav ul li');
styleLi.forEach( item => {
  item.style.display ='inline'; 
  item.style.padding = '0.5rem'}
  ); 


// removing under line from the a link
const stylea = document.querySelectorAll('.navClass nav ul li a');
stylea.forEach( item => item.style.textDecoration = 'none'); 










